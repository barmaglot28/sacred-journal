import "./Button.scss";

import React from "react";
import PropTypes from "prop-types";

export class Button extends React.Component {
    render() {
        const {
            disabled,
            className,
            label,
        } = this.props;

        return (
            <div className={`wrapper-button ${className || ""} ${disabled ? "wrapper-button-disabled" : ""}`}
                 onClick={this.onClick}>
                {label || ""}
            </div>
        );
    }

    onClick = () => {
        if (!this.props.disabled && this.props.onClick) {
            this.props.onClick();
        }
    }
}

Button.propTypes = {
    disabled: PropTypes.bool,

    className: PropTypes.string,
    label: PropTypes.string,

    onClick: PropTypes.func,
};
