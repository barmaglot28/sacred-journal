import {getFetchInitProps} from "../../common/util/request";

const SELECT_ARTICLE = "SELECT_ARTICLE";
const CREATE_ARTICLE = "CREATE_ARTICLE";

const CHANGE_TITLE = "CHANGE_TITLE";
const SAVE_TITLE = "SAVE_TITLE";

const CHANGE_TEXT = "CHANGE_TEXT";
const SAVE_TEXT = "SAVE_TEXT";

const SAVE_ARTICLE_SEND = "SAVE_ARTICLE_SEND";
const SAVE_ARTICLE_SUCCESS = "SAVE_ARTICLE_SUCCESS";
const SAVE_ARTICLE_FAILED = "SAVE_ARTICLE_FAILED";

const initialState = {
    failed: false,
    errorCode: "",

    articles: [],
};

const newArticle = articles => ({
    selected: false,
    changed: false,

    id: `-${articles.length}`,
    title: "Щось новеньке, що додав наш чудовий автор",
    editedTitle: "Щось новеньке, що додав наш чудовий автор",
    text: "Тут бере свій початок нова стаття, тут бере свій початок світло",
    editedText: "Тут бере свій початок нова стаття, тут бере свій початок світло",
    author: null,
});

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TITLE:
            return ({
                ...state,
                articles: state.articles.map(i => i.id === action.id ? {...i, editedTitle: action.title} : i),
            });
        case SAVE_TITLE:
            return ({
                ...state,
                articles: state.articles.map(i => i.id === action.id ? {...i, title: i.editedTitle} : i),
            });

        case CHANGE_TEXT:
            return ({
                ...state,
                articles: state.articles.map(i => i.id === action.id ? {...i, editedText: action.text} : i),
            });
        case SAVE_TEXT:
            return ({
                ...state,
                articles: state.articles.map(i => i.id === action.id ? {...i, text: i.editedText} : i),
            });

        case CREATE_ARTICLE:
            return ({
                ...state,
                articles: [...state.articles, newArticle(state.articles)]
            });

        case SELECT_ARTICLE:
            return ({
                ...state,
                articles: state.articles.map(i => i.id === action.id ? {...i, selected: !i.selected} : i),
            });

        case SAVE_ARTICLE_SEND:
        case SAVE_ARTICLE_SUCCESS:
        case SAVE_ARTICLE_FAILED:
        default:
            return state;
    }
};

export const saveTitle = id => ({
    type: SAVE_TITLE,
    id,
});

export const saveText = id => ({
    type: SAVE_TEXT,
    id,
});

export const changeTitle = (title, id) => ({
    type: CHANGE_TITLE,
    title,
    id,
});

export const changeText = (text, id) => ({
    type: CHANGE_TEXT,
    text,
    id,
});

export const selectArticle = id => ({
    type: SELECT_ARTICLE,
    id,
});

export const createArticle = () => ({
    type: CREATE_ARTICLE,
});

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
