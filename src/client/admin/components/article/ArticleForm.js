import "./ArticleForm.scss";

import React from "react";
import PropTypes from "prop-types";

import {ArticleActionMenu} from "./ArticleActionMenu";
import {ArticleList} from "./ArticleList";

export class ArticleForm extends React.Component {
    render() {
        const {
            article,

            onSaveText,
            onSaveTitle,
            onChangeText,
            onChangeTitle,
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

                    onSaveTitle={onSaveTitle}
                    onSaveText={onSaveText}
                    onChangeText={onChangeText}
                    onChangeTitle={onChangeTitle}
                    onSelectArticle={onSelectArticle}
                />
            </div>
        )
    }
}

ArticleForm.propTypes = {
    article: PropTypes.object.isRequired,

    onSaveText: PropTypes.func.isRequired,
    onSaveTitle: PropTypes.func.isRequired,
    onChangeText: PropTypes.func.isRequired,
    onChangeTitle: PropTypes.func.isRequired,
    onSelectArticle: PropTypes.func.isRequired,
    onCreateArticle: PropTypes.func.isRequired,
};
