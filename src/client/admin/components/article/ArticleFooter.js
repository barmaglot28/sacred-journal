import "./ArticleFooter.scss";

import React from "react";
import PropTypes from "prop-types";
import {Button} from "../../../common/components/Button";

export class ArticleFooter extends React.Component {
    render() {
        const {
            selected,
        } = this.props;

        return (
            <div className={`wrapper-article-footer ${selected ? "selected" : ""}`}>
                <Button label={"Зберегти"}/>
                <Button label={"Видалити"}/>
                <Button label={"Відкатити зміни"}/>
            </div>
        )
    }
}

ArticleFooter.propTypes = {
    selected: PropTypes.bool.isRequired,
};
