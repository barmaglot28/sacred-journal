const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ArticleSchema = new Schema({
    title: String,
    text: String,
    author: {
        id: ObjectId,
        name: String,
    },
    createdTime: Date,
});

module.exports = mongoose.model("Article", ArticleSchema);
