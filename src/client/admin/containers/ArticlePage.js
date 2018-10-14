import React from "react";
import {connect} from "react-redux";

import {
    createArticle,
    selectArticle,
    changeText,
    saveText,
    changeTitle,
    saveTitle,
    cancelChanges,
} from "../ducks/article";
import {ArticleForm} from "../components/article/ArticleForm";

class ArticlePage extends React.Component {
    render() {
        const {
            article,

            changeTitle,
            changeText,
            createArticle,
            selectArticle,
            saveText,
            saveTitle,
            cancelChanges,
        } = this.props;

        return (
            <React.Fragment>
                <ArticleForm
                    article={article}

                    onCancelChanges={cancelChanges}
                    onSaveText={saveText}
                    onSaveTitle={saveTitle}
                    onChangeText={changeText}
                    onChangeTitle={changeTitle}
                    onCreateArticle={createArticle}
                    onSelectArticle={selectArticle}
                />
            </React.Fragment>
        );
    }
}

const mapState2props = state => ({
    article: state.article,
});

const mapDispatch2props = {
    createArticle,
    selectArticle,
    cancelChanges,
    changeText,
    changeTitle,
    saveText,
    saveTitle,
};

export default connect(mapState2props, mapDispatch2props)(ArticlePage);