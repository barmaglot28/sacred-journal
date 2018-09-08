import {getFetchInitProps} from "../../common/util/request";

const CREATE_ARTICLE = "CREATE_ARTICLE";

const SAVE_ARTICLE_SEND = "SAVE_ARTICLE_SEND";
const SAVE_ARTICLE_SUCCESS = "SAVE_ARTICLE_SUCCESS";
const SAVE_ARTICLE_FAILED = "SAVE_ARTICLE_FAILED";

export const reducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_ARTICLE:
        case SAVE_ARTICLE_SEND:
        case SAVE_ARTICLE_SUCCESS:
        case SAVE_ARTICLE_FAILED:
        default:
            return state;
    }
};

export const saveArticle = article => dispatch => {
    dispatch({
        type: SAVE_ARTICLE_SEND,
        article,
    });

    fetch("/api/admin/article", getFetchInitProps("post", {article}))
        .then(res => res.json())
        .then(res => {
            if (res && res.status === 200) {
                dispatch({
                    type: SAVE_ARTICLE_SUCCESS,
                    payload: res.payload,
                });
            } else {
                throw new res.errorCode;
            }
        })
        .catch(errorCode => dispatch({
            type: SAVE_ARTICLE_FAILED,
            errorCode,
        }));
};
