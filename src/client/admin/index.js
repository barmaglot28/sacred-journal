import "../index.scss";
import "../fonts.scss";

import React from "react";
import ReactDOM from "react-dom";
import {combineReducers, createStore, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import {reducer as article} from "./ducks/article";
import {Provider} from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";
import Main from "./containers/Main";

const reducer = combineReducers({article});
const store = createStore(reducer, applyMiddleware(thunk, createLogger()));

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <Route path="/" component={Main}/>
    </BrowserRouter>
</Provider>, document.getElementById("root"));
