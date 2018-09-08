import React from "react";
import {Switch, Route, withRouter} from "react-router";

import {Header} from "../../common/components/Header";

import UserPage from "./UserPage";
import ArticlePage from "./ArticlePage";
import FeedbackPage from "./FeedbackPage";

class Main extends React.Component {
    render() {
        const {router} = this.props;

        return (
            <React.Fragment>
                <Header router={router}/>
                <Switch>
                    <Route path={"/articles"} component={ArticlePage}/>
                    <Route path={"/users"} component={UserPage}/>
                    <Route path={"/feedback"} component={FeedbackPage}/>

                    <Route component={ArticlePage}/>
                </Switch>
            </React.Fragment>
        )
    }
}

export default withRouter(Main);
