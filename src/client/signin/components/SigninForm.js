import "./SigninForm.scss";

import React from "react";
import PropTypes from "prop-types";

import {Input} from "../../common/components/input/Input";
import {Button} from "../../common/components/button/Button";
import {Alert} from "../../common/components/alert/Alert";
import {resolveText} from "../../common/util/errorText";

export class SigninForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visibleButton: false,
        }
    }

    componentDidMount() {
        setTimeout(() =>  setInterval(() => {
            document.getElementById("signin-form").style["background-color"] = `#${Math.ceil((Math.random() * (0xffffff - 0x000000) + 0x000000))}`;
        }, 3000), 1000)

    }

    render() {
        const {
            failed,
            errorCode,
            locked,
            login,
            password,
        } = this.props;

        const {
            visibleButton,
        } = this.state;

        return (
            <div id="signin-form" className={"wrapper-signin-form"}>
                <div className={"wrapper-input-block"}>
                    {failed && <Alert text={resolveText(errorCode)}/>}
                    <Input
                        value={login}
                        onChange={this.onLoginChange}
                    />
                    <Input
                        value={password}
                        onChange={this.onPassChange}
                    />
                    <Button
                        className={`login-button ${visibleButton && !locked ? "visible" : ""}`}
                        onClick={this.onSignin}
                        label={"увійти"}
                    />
                </div>
            </div>
        )
    }

    onSignin = () => {
        const {
            password,
            login,
        } = this.props;

        this.props.onSignin(login, password);
    };

    onLoginChange = value => {
        const password = this.props.password;
        this.setState({
            visibleButton: !!(value && password),
        });

        this.props.onChangeLogin(value);
    };

    onPassChange = value => {
        const login = this.props.login;
        this.setState({
            visibleButton: !!(value && login),
        });

        this.props.onChangePass(value);
    };
}

SigninForm.propTypes = {
    failed: PropTypes.bool.isRequired,
    locked: PropTypes.bool.isRequired,
    errorCode: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,

    onSignin: PropTypes.func.isRequired,
    onChangeLogin: PropTypes.func.isRequired,
    onChangePass: PropTypes.func.isRequired,
};
