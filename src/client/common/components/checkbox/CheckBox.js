import "./CheckBox.scss";

import React from "react";
import PropTypes from "prop-types";

export class CheckBox extends React.Component {
    render() {
        return (
            <div className={"wrapper-checkbox"} onClick={this.onClick}>
                {this.props.checked ? "X" : ""}
            </div>
        )
    }

    onClick = e => {
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }
}

CheckBox.propTypes = {
    checked: PropTypes.bool,

    onClick: PropTypes.func,
};
