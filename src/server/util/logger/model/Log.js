"use strict";

const mongoose = require("mongoose");
const LogSchema = new mongoose.Schema({
    reqId: String,
    timestamp: Date,
    level: String,
    filename: String,
    message: String,
    method: String,
    objects: String
});

module.exports = mongoose.model("Log", LogSchema);
