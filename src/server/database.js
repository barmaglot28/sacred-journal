const mongoose = require("mongoose");
const connection = mongoose.createConnection("mongodb://mongo:27017/journal");

module.exports = connection;