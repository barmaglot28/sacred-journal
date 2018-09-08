import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class ArticlePage extends React.Component {
    render() {
        return (<div>
            тут сторінка для роботи зі статтями.
        </div>);
    }
}

const mapState2props = state => ({

});

const mapDispatch2props = dispatch => ({

});

export default connect(mapState2props, mapDispatch2props)(ArticlePage);