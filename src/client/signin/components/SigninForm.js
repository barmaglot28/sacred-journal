import "./SigninForm.scss";

import React from "react";
import PropTypes from "prop-types";

import {Input} from "../../common/components/Input";
import {Button} from "../../common/components/Button";

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
            login,
            pass,
        } = this.props;

        const {
            visibleButton,
        } = this.state;

        return (
            <div id="signin-form" className={"wrapper-signin-form"}>
                <div className={"wrapper-input-block"}>
                    <Input
                        value={login}
                        onChange={this.onLoginChange}
                    />
                    <Input
                        value={pass}
                        onChange={this.onPassChange}
                    />
                    <Button
                        className={`login-button ${visibleButton ? "visible" : ""}`}
                        label={"увійти"}
                    />
                </div>
            </div>
        )
    }

    onLoginChange = value => {
        const pass = this.props.pass;
        this.setState({
            visibleButton: !!(value && pass),
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
    login: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,

    onChangeLogin: PropTypes.func.isRequired,
    onChangePass: PropTypes.func.isRequired,
};
