import React from "react";
import {connect} from "react-redux";
import {SigninForm} from "../components/SigninForm";
import {changeLogin, changePass, signin} from "../ducks/signin";

class Signin extends React.Component {
    render() {
        const {
            signinState,

            changeLogin,
            changePass,
            signin,
        } = this.props;

        return (
            <SigninForm
                failed={signinState.failed}
                errorCode={signinState.errorCode}
                locked={signinState.locked}
                login={signinState.login}
                password={signinState.password}

                onChangeLogin={changeLogin}
                onChangePass={changePass}
                onSignin={signin}
            />
        )
    }
}

const mapState2props = state => ({
    signinState: state.signin,
});

const mapDispatch2props = {
    signin,

    changeLogin,
    changePass,
};

export default connect(mapState2props, mapDispatch2props)(Signin);