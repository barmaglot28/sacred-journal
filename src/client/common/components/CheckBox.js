import "./CheckBox.scss";

import React from "react";
import PropTypes from "prop-types";

export class CheckBox extends React.Component {
    render() {
        return (
            <div className={"wrapper-checkbox"}>
                <input type="checkbox" onChange={this.onClick}/>
            </div>
        )
    }

    onClick = () => {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }
}

CheckBox.propTypes = {
    checked: PropTypes.bool,

    onClick: PropTypes.func,
};
