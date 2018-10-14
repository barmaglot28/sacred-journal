import "./ArticleHeader.scss";

import React from "react";
import PropTypes from "prop-types";
import {CheckBox} from "../../../../common/components/checkbox/CheckBox";
import {Input} from "../../../../common/components/input/Input";

export class ArticleHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            editable,

            title,
            selected,

            editedTitle,

            onHeaderClick,
        } = this.props;

        return (
            <div className={`wrapper-article-header ${selected ? "selected" : ""}`} onClick={onHeaderClick}>
                <div className={"wrapper-article-checkbox"}>
                    <CheckBox
                        checked={selected}
                        onClick={this.onSelect}
                    />
                </div>
                <div className={"wrapper-article-title"}>
                    {
                        editable ?
                            <Input
                                value={editedTitle}
                                onClick={this.onTitleClick}
                                onChange={this.onTitleChange}
                            />
                            :
                            title
                    }
                </div>
            </div>
        )
    }

    onSelect = e => {
        e.stopPropagation();

        this.props.onSelectArticle(this.props.id);
    };

    onTitleClick = e => e.stopPropagation();

    onTitleChange = value => {
        const id = this.props.id;
        this.props.onChangeTitle(value, id);
    };
}

ArticleHeader.propTypes = {
    id: PropTypes.string.isRequired,
    editable: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    editedTitle: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,

    onChangeTitle: PropTypes.func.isRequired,
    onHeaderClick: PropTypes.func.isRequired,
    onSelectArticle: PropTypes.func.isRequired,
};
