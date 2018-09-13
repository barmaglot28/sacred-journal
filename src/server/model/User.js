const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    login: String,
    pass: String,
});

module.exports = mongoose.model("User", UserSchema);
