import React from "react";
import {Link} from "react-router-dom";
import "./Header.scss";

export class Header extends React.Component {
    render() {
        return (
            <div className={"wrapper-header"}>
                <div className={"wrapper-header-title"}>
                    {"вовчок."}
                </div>
                <div className={"wrapper-header-menu"}>
                    <Link to={"/articles"}>
                        {"статті"}
                    </Link>
                    <Link to={"/users"}>
                        {"користувачі"}
                    </Link>
                    <Link to={"/feedback"}>
                        {"зворотній зв'язок"}
                    </Link>
                </div>
            </div>
        )
    }
}
