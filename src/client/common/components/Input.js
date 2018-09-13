import "./Input.scss";

import React from "react";
import PropTypes from "prop-types";

export class Input extends React.Component {
    render() {
        const {
            autofocus,

            value,
        } = this.props;

        return (
            <div className={"wrapper-input"}>
                <input
                    autoFocus={autofocus}
                    type={"text"}

                    value={value}

                    onBlur={this.onBlur}
                    onClick={this.onClick}
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown}
                />
            </div>
        )
    }

    onClick = e => {
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    };

    onBlur = () => {
        if (this.props.onBlur) {
            this.props.onBlur();
        }
    };

    onChange = e => {
        if (this.props.onChange) {
            const value = e.target.value;
            this.props.onChange(value);
        }
    };

    onKeyDown = e => {
        if (this.props.onKeyDown) {
            this.props.onKeyDown(e);
        }
    }
}

Input.propTypes = {
    autofocus: PropTypes.bool,

    value: PropTypes.string,

    onClick: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
};
