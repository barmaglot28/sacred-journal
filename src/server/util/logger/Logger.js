"use strict";

const ConsoleWriter = require("./writer/ConsoleWriter");
const MongoWriter = require("./writer/MongoWriter");
const LoggerUtil = require("./LoggerUtil")().getUtil();

const Logger = function (filename) {
    this.filename = filename.substr(LoggerUtil.rootLength);
    this.writers = [];

    if (LoggerUtil.mongoEnabled) {
        this.writers.push(new MongoWriter());
    }
    if (LoggerUtil.consoleEnabled) {
        this.writers.push(new ConsoleWriter());
    }

    this.start = (reqId, method, objects = {}) => {
        for (const writer of this.writers) {
            writer.info(reqId, this.filename, method, "started", LoggerUtil.stringify(objects));
        }
    };

    this.finish = (reqId, method, objects = {}) => {
        for (const writer of this.writers) {
            writer.info(reqId, this.filename, method, "finish", LoggerUtil.stringify(objects));
        }
    };

    this.fail = (reqId, method, message, validErrors, objects = {}) => {
        const err = objects && objects.err && objects.err.message ? objects.err.message : objects.err;
        objects.err = err;

        let logMethod = "error";

        if (validErrors.includes(err)) {
            logMethod = "warn";
        }

        for (const writer of this.writers) {
            writer[logMethod](reqId, this.filename, method, `failed: ${message}`, LoggerUtil.stringify(objects));
        }
    };

    this.info = (reqId, method, message, objects = {}) => {
        for (const writer of this.writers) {
            writer.info(reqId, this.filename, method, message, LoggerUtil.stringify(objects));
        }
    };

    this.warn = (reqId, method, message, objects = {}) => {
        for (const writer of this.writers) {
            writer.warn(reqId, this.filename, method, message, LoggerUtil.stringify(objects));
        }
    };

    this.error = (reqId, method, message, objects = {}) => {
        for (const writer of this.writers) {
            writer.error(reqId, this.filename, method, message, LoggerUtil.stringify(objects));
        }
    }
}
