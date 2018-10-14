import "./ArticleBody.scss";

import React from "react";
import PropTypes from "prop-types";
import {Textarea} from "../../../../common/components/textarea/Textarea";

export class ArticleBody extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            editable,

            text,
            expanded,
            editedText,
        } = this.props;

        return (
            <div className={`wrapper-article-body ${expanded ? "expanded" : ""}`}>
                <div className={`wrapper-article-body-text ${expanded ? "expanded-body-text" : ""}`}>
                    {
                        !editable ?
                            <Textarea
                                value={editedText}
                                onChange={this.onChangeText}
                            />
                            :
                            text
                    }
                </div>
            </div>
        )
    }

    onChangeText = value => {
        const {id} = this.props;
        this.props.onChangeText(value, id);
    }
}

ArticleBody.propTypes = {
    editable: PropTypes.bool.isRequired,

    id: PropTypes.string.isRequired,

    text: PropTypes.string.isRequired,
    editedText: PropTypes.string.isRequired,
    expanded: PropTypes.bool.isRequired,

    onSaveText: PropTypes.func.isRequired,
    onChangeText: PropTypes.func.isRequired,
};
