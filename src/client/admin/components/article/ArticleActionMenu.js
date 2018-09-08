import "./ArticleActionMenu.scss";

import React from "react";
import PropTypes from "prop-types";

import {Button} from "../../../common/components/Button";

export class ArticleActionMenu extends React.Component {
    render() {
        const {
            articles,

            onCreateArticle,
        } = this.props;

        const additionalButtonsDisabled = articles.length === 0 || articles.every(i => !i.selected);

        return (
            <div className={"wrapper-article-action-menu"}>
                <Button
                    label={"Додати щось новеньке"}
                    onClick={onCreateArticle}
                />
                <Button
                    disabled={additionalButtonsDisabled}
                    label={"Зберегти статтю"}
                />
                <Button
                    disabled={additionalButtonsDisabled}
                    label={"Редагувати статтю"}
                />
                <Button
                    disabled={additionalButtonsDisabled}
                    label={"Видалити статтю"}
                />
            </div>
        )
    }
}

ArticleActionMenu.propTypes = {
    articles: PropTypes.array.isRequired,

    onCreateArticle: PropTypes.func.isRequired,
};
