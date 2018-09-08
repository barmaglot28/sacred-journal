"use strict";

const LogLevel = require("../constants/LogLevel");
const LogModel = require("../model/Log");

const MongoWriter = function () {};

MongoWriter.write = function (reqId, message, objects, filename, method, level) {
    const log = new LogModel({
        reqId: reqId,
        level: level,
        method: method,
        objects: objects,
        message: message,
        filename: filename,
        timestamp: new Date()
    });
    log.save();
};
MongoWriter.prototype.info = function (reqId, filename, method, message, objects) {
    MongoWriter.write(reqId, message, objects, filename, method, LogLevel.INFO);
};
MongoWriter.prototype.warn = function (reqId, filename, method, message, objects) {
    MongoWriter.write(reqId, message, objects, filename, method, LogLevel.WARN);
};
MongoWriter.prototype.error = function (reqId, filename, method, message, objects) {
    MongoWriter.write(reqId, message, objects, filename, method, LogLevel.ERROR);
};

module.exports = MongoWriter;
