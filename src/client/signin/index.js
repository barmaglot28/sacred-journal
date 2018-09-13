import "../index.scss";
import "../fonts.scss";

import React from "react";
import ReactDOM from "react-dom";
import {combineReducers, createStore, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";

import {reducer as signin} from "./ducks/signin";
import Signin from "./containers/Signin";

const reducer = combineReducers({signin});
const store = createStore(reducer, applyMiddleware(thunk, createLogger()));

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <Route path="/" component={Signin}/>
    </BrowserRouter>
</Provider>, document.getElementById("root"));