import React from "react";
import {connect} from "react-redux";

import {createArticle, selectArticle} from "../ducks/article";
import {ArticleForm} from "../components/article/ArticleForm";

class ArticlePage extends React.Component {
    render() {
        const {
            article,

            createArticle,
            selectArticle,
        } = this.props;

        return (
            <React.Fragment>
                <ArticleForm
                    article={article}

                    onCreateArticle={createArticle}
                    onSelectArticle={selectArticle}
                />
            </React.Fragment>
        );
    }
}

const mapState2props = state => ({
    article: state.article,
});

const mapDispatch2props = {
    createArticle,
    selectArticle,
};

export default connect(mapState2props, mapDispatch2props)(ArticlePage);