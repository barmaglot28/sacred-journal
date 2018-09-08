import "./ArticleList.scss";

import React from "react";
import PropTypes from "prop-types";
import {Article} from "./Article";

export class ArticleList extends React.Component {
    render() {
        const {
            articles,

            onSelectArticle,
        } = this.props;

        return (
            <div className={"wrapper-article-list"}>
                {articles.map(i => <Article
                    key={i.id}

                    id={i.id}
                    text={i.text}
                    title={i.title}

                    selected={i.selected}

                    onSelectArticle={onSelectArticle}
                />)}
            </div>
        )
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,

    onSelectArticle: PropTypes.func.isRequired,
};
