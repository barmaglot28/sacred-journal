import "./ArticleBody.scss";

import React from "react";
import PropTypes from "prop-types";
import {Input} from "../../../common/components/Input";

export class ArticleBody extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editText: false,
        };
    }

    render() {
        const {
            text,
            expanded,
            editedText,

            onChangeText,
        } = this.props;

        const {
            editText,
        } = this.state;

        return (
            <div className={`wrapper-article-body ${expanded ? "expanded" : ""}`} onClick={this.onTextClick}>
                <div className={`wrapper-article-body-text ${expanded ? "expanded-body-text" : ""}`}>
                    {
                        editText ?
                            (<Input
                                autofocus
                                value={editedText}
                                onChange={onChangeText}
                            />)
                            :
                            text
                    }
                </div>
            </div>
        )
    }

    onTextClick = e => {
        if (!this.state.editText) {
            e.stopPropagation();

            this.setState({
                ...this.state,
                editText: true,
            });
        }
    }
}

ArticleBody.propTypes = {
    text: PropTypes.string.isRequired,
    editedText: PropTypes.string.isRequired,
    expanded: PropTypes.bool.isRequired,

    onSaveText: PropTypes.func.isRequired,
    onChangeText: PropTypes.func.isRequired,
};
