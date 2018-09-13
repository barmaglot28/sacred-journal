import "./Article.scss";

import React from "react";
import PropTypes from "prop-types";
import {CheckBox} from "../../../common/components/CheckBox";
import {Input} from "../../../common/components/Input";
import {Button} from "../../../common/components/Button";
import {ArticleHeader} from "./ArticleHeader";
import {ArticleBody} from "./ArticleBody";
import {ArticleFooter} from "./ArticleFooter";

export class Article extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
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
            expanded,
        } = this.state;

        return (
            <div className={"wrapper-article"}>
                <ArticleHeader
                    id={id}
                    title={title}
                    selected={selected}
                    editedTitle={editedTitle}

                    onSaveTitle={onSaveTitle}
                    onChangeTitle={onChangeTitle}
                    onSelectArticle={onSelectArticle}

                    onHeaderClick={this.onHeaderClick}
                />
                <ArticleBody
                    text={text}
                    editedText={editedText}
                    expanded={expanded}

                    onSaveText={onSaveText}
                    onChangeText={onChangeText}
                />
                <ArticleFooter selected={selected}/>
            </div>
        )
    }

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

    onSelectArticle: PropTypes.func.isRequired,
};
