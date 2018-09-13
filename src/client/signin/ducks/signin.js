const CHANGE_LOGIN = "CHANGE_LOGIN";
const CHANGE_PASS = "CHANGE_PASS";

const initialState = {
    failed: false,
    errorCode: "",

    login: "",
    pass: "",
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LOGIN:
            return ({
                ...state,
                login: action.login,
            });

        case CHANGE_PASS:
            return ({
                ...state,
                pass: action.pass,
            });

        default:
            return state;
    }
};

export const changeLogin = login => ({
    type: CHANGE_LOGIN,
    login,
});

export const changePass = pass => ({
    type: CHANGE_PASS,
    pass,
});