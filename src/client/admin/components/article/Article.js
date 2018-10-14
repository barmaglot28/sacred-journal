import "./Article.scss";

import React from "react";
import PropTypes from "prop-types";
import {ArticleHeader} from "./header/ArticleHeader";
import {ArticleBody} from "./body/ArticleBody";
import {ArticleFooter} from "./footer/ArticleFooter";

export class Article extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
            editable: false,
            firstVer: {
                title: props.title,
                text: props.text,
            },
        }
    }

    render() {
        const {
            selected,

            id,
            text,
            title,

            editedTitle,
            editedText,

            onSaveText,
            onChangeText,

            onSaveTitle,
            onChangeTitle,

            onSelectArticle
        } = this.props;

        const {
            editable,
            expanded,
        } = this.state;

        return (
            <div className={"wrapper-article"}>
                <ArticleHeader
                    id={id}
                    title={title}
                    selected={selected}
                    editable={editable}

                    editedTitle={editedTitle}

                    onChangeTitle={onChangeTitle}
                    onSelectArticle={onSelectArticle}

                    onHeaderClick={this.onHeaderClick}
                />
                <ArticleBody
                    id={id}

                    editable={editable}

                    text={text}
                    editedText={editedText}
                    expanded={expanded}

                    onSaveText={onSaveText}
                    onChangeText={onChangeText}
                />
                <ArticleFooter
                    editable={editable}
                    selected={selected}
                    onCancelButtonClick={this.onCancelButtonClick}
                    onEditButtonClick={this.onEditButtonClick}
                />
            </div>
        )
    }

    onEditButtonClick = () => {
        this.setState({
            ...this.state,
            expanded: true,
            editable: true,
        });
    };

    onCancelButtonClick = () => {
        this.setState({
            ...this.state,
            editable: false,
        });
        this.props.onCancelChanges(this.props.id);
    };

    onHeaderClick = () => {
        this.setState({
            ...this.state,
            expanded: !this.state.expanded,
        })
    };
}

Article.propTypes = {
    selected: PropTypes.bool.isRequired,

    id: PropTypes.string.isRequired,

    title: PropTypes.string.isRequired,
    editedTitle: PropTypes.string.isRequired,

    text: PropTypes.string.isRequired,
    editedText: PropTypes.string.isRequired,

    onChangeText: PropTypes.func.isRequired,
    onSaveText: PropTypes.func.isRequired,

    onChangeTitle: PropTypes.func.isRequired,
    onSaveTitle: PropTypes.func.isRequired,

    onCancelChanges: PropTypes.func.isRequired,
    onSelectArticle: PropTypes.func.isRequired,
};
