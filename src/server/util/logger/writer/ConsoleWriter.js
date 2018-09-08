"use strict";

const LogLevel = require("../constants/LogLevel");
const ConsoleWriter = function () {};

ConsoleWriter.write = function (reqId, message, objects, method, filename, level) {
    console[level](JSON.stringify({
        reqId: reqId,
        level: level,
        method: method,
        objects: objects,
        message: message,
        filename: filename,
        timestamp: new Date()
    }));
};
ConsoleWriter.prototype.info = function (reqId, filename, method, message, objects) {
    ConsoleWriter.write(reqId, message, objects, method, filename, LogLevel.INFO);
};
ConsoleWriter.prototype.warn = function (reqId, filename, method, message, objects) {
    ConsoleWriter.write(reqId, message, objects, method, filename, LogLevel.WARN);
};
ConsoleWriter.prototype.error = function (reqId, filename, method, message, objects) {
    ConsoleWriter.write(reqId, message, objects, method, filename, LogLevel.ERROR);
};

module.exports = ConsoleWriter;
