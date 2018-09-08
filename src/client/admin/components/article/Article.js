import "./Article.scss";

import React from "react";
import PropTypes from "prop-types";
import {CheckBox} from "../../../common/components/CheckBox";

export class Article extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstVer: {
                title: props.title,
                text: props.text,
            },
        }
    }

    render() {
        const {
            selected,

            title,
            text,
        } = this.props;

        return (
            <div className={"wrapper-article"}>
                <div className={"wrapper-article-checkbox"}>
                    <CheckBox
                        checked={selected}
                        onClick={this.onSelect}
                    />
                </div>
                <div>
                    <div>
                        {title}
                    </div>
                    <div>
                        {text}
                    </div>
                </div>
            </div>
        )
    }

    onSelect = () => {
        this.props.onSelectArticle(this.props.id);
    }
}

Article.propTypes = {
    selected: PropTypes.bool.isRequired,

    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,

    onSelectArticle: PropTypes.func.isRequired,
};
