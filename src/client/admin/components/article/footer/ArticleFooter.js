import "./ArticleFooter.scss";

import React from "react";
import PropTypes from "prop-types";
import {Button} from "../../../../common/components/button/Button";

export class ArticleFooter extends React.Component {
    render() {
        const {
            editable,
            selected,

            onEditButtonClick,
            onCancelButtonClick,
        } = this.props;

        return (
            <div className={`wrapper-article-footer ${selected ? "selected" : ""}`}>
                <Button
                    disabled={editable}
                    label={"Редагувати"}
                    onClick={onEditButtonClick}
                />
                <Button
                    disabled={!editable}
                    label={"Зберегти"}
                />
                <Button
                    disabled={!editable}
                    onClick={onCancelButtonClick}
                    label={"Відкатити зміни"}
                />
                <Button
                    disabled
                    label={"Видалити"}
                />
            </div>
        )
    }
}

ArticleFooter.propTypes = {
    editable: PropTypes.bool.isRequired,
    selected: PropTypes.bool.isRequired,

    onEditButtonClick: PropTypes.func.isRequired,
    onCancelButtonClick: PropTypes.func.isRequired,
};
