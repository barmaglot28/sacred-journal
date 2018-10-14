import {getFetchInitProps} from "../../common/util/request";

const CHANGE_LOGIN = "CHANGE_LOGIN";
const CHANGE_PASS = "CHANGE_PASS";
const SIGNIN_SEND = "SIGNIN_SEND";
const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
const SIGNIN_FAILED = "SIGNIN_FAILED";

const initialState = {
    locked: false,
    failed: false,
    errorCode: "",

    login: "",
    password: "",
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN_SEND:
            return ({
                ...state,
                locked: true,
                failed: false,
            });

        case SIGNIN_SUCCESS:
            return ({
                ...state,
                locked: false,
            });

        case SIGNIN_FAILED:
            return ({
                ...state,
                locked: false,
                failed: true,
                errorCode: action.errorCode,
            });

        case CHANGE_LOGIN:
            return ({
                ...state,
                login: action.login,
            });

        case CHANGE_PASS:
            return ({
                ...state,
                password: action.password,
            });

        default:
            return state;
    }
};

export const changeLogin = login => ({
    type: CHANGE_LOGIN,
    login,
});

export const changePass = password => ({
    type: CHANGE_PASS,
    password,
});

export const signin = (login, password) => dispatch => {
    dispatch({
        type: SIGNIN_SEND,
        login,
        password,
    });

    fetch("/api/login", getFetchInitProps("POST", {login, password}))
        .then(res => res.json())
        .then(res => {
            if (res.success) {
                dispatch({ type: SIGNIN_SUCCESS });
                document.location.href = "/";
            } else {
                throw res.errorCode;
            }
        })
        .catch(err => dispatch({ type: SIGNIN_FAILED, errorCode: typeof err === "string" ? err : err.message}));
};
