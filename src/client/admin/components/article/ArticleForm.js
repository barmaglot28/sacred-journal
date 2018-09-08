import "./ArticleForm.scss";

import React from "react";
import PropTypes from "prop-types";

import {ArticleActionMenu} from "./ArticleActionMenu";
import {ArticleList} from "./ArticleList";

export class ArticleForm extends React.Component {
    render() {
        const {
            article,

            onCreateArticle,
            onSelectArticle,
        } = this.props;

        return (
            <div className={"wrapper-article-form"}>
                <ArticleActionMenu
                    articles={article.articles}
                    onCreateArticle={onCreateArticle}
                />
                <ArticleList
                    articles={article.articles}

                    onSelectArticle={onSelectArticle}
                />
            </div>
        )
    }
}

ArticleForm.propTypes = {
    article: PropTypes.object,

    onSelectArticle: PropTypes.func,
    onCreateArticle: PropTypes.func,
};
