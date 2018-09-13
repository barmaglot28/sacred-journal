import "./ArticleList.scss";

import React from "react";
import PropTypes from "prop-types";
import {Article} from "./Article";

export class ArticleList extends React.Component {
    render() {
        const {
            articles,

            onSaveText,
            onSaveTitle,
            onChangeText,
            onChangeTitle,
            onSelectArticle,
        } = this.props;

        return (
            <div className={"wrapper-article-list"}>
                {articles.map(i => <Article
                    key={i.id}

                    id={i.id}

                    text={i.text}
                    editedText={i.editedText}

                    title={i.title}
                    editedTitle={i.editedTitle}

                    selected={i.selected}

                    onChangeText={onChangeText}
                    onSaveText={onSaveText}

                    onChangeTitle={onChangeTitle}
                    onSaveTitle={onSaveTitle}

                    onSelectArticle={onSelectArticle}
                />)}
            </div>
        )
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,

    onChangeText: PropTypes.func.isRequired,
    onSaveText: PropTypes.func.isRequired,

    onChangeTitle: PropTypes.func.isRequired,
    onSaveTitle: PropTypes.func.isRequired,

    onSelectArticle: PropTypes.func.isRequired,
};
