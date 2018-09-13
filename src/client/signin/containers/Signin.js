import React from "react";
import {connect} from "react-redux";
import {SigninForm} from "../components/SigninForm";
import {changeLogin, changePass} from "../ducks/signin";

class Signin extends React.Component {
    render() {
        const {
            signin,

            changeLogin,
            changePass,
        } = this.props;

        return (
            <SigninForm
                login={signin.login}
                pass={signin.pass}

                onChangeLogin={changeLogin}
                onChangePass={changePass}
            />
        )
    }
}

const mapState2props = state => ({
    signin: state.signin,
});

const mapDispatch2props = {
    changeLogin,
    changePass,
};

export default connect(mapState2props, mapDispatch2props)(Signin);