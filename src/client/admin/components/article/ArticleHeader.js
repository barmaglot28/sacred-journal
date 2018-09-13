import "./ArticleHeader.scss";

import React from "react";
import PropTypes from "prop-types";
import {CheckBox} from "../../../common/components/CheckBox";
import {Input} from "../../../common/components/Input";

export class ArticleHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editHeader: false,
        }
    }

    render() {
        const {
            title,
            selected,

            editedTitle,

            onHeaderClick,
        } = this.props;

        const {
            editHeader,
        } = this.state;

        return (
            <div className={`wrapper-article-header ${selected ? "selected" : ""}`} onClick={onHeaderClick}>
                <div className={"wrapper-article-checkbox"}>
                    <CheckBox
                        checked={selected}
                        onClick={this.onSelect}
                    />
                </div>
                <div className={"wrapper-article-title"} onClick={this.onTitleClick}>
                    {editHeader ?
                        (<Input
                            autofocus
                            value={editedTitle}
                            onBlur={this.onTitleBlur}
                            onChange={this.onTitleChange}
                            onKeyDown={this.onTitleKeyDown}
                            onClick={this.onTitleInputClick}
                        />)
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

    onTitleClick = e => {
        if (!this.state.editHeader) {
            e.stopPropagation();

            this.setState({
                ...this.state,
                editHeader: true,
            });
        }
    };

    onTitleKeyDown = e => {
        if (e.keyCode === 13) {
            this.onSaveTitle();
        }
    };

    onTitleInputClick = e => {
        e.stopPropagation();
    };

    onTitleChange = value => {
        const id = this.props.id;
        this.props.onChangeTitle(value, id);
    };

    onTitleBlur = () => {
        this.onSaveTitle();
    };

    onSaveTitle = () => {
        if (this.props.editedTitle !== this.props.title) {
            const id = this.props.id;
            this.props.onSaveTitle(id);
        }

        this.setState({
            ...this.state,
            editHeader: false,
        });
    };
}

ArticleHeader.propTypes = {
    id: PropTypes.string.isRequired,

    title: PropTypes.string.isRequired,
    editedTitle: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,

    onChangeTitle: PropTypes.func.isRequired,
    onSaveTitle: PropTypes.func.isRequired,
    onHeaderClick: PropTypes.func.isRequired,
    onSelectArticle: PropTypes.func.isRequired,
};
