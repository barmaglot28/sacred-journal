function normalizeJSON (object) {
    let i;
    let k;
    let ret;

    if (!(object instanceof Object)) {
        ret = object;
    } else if (object.toJSON) {
        ret = object.toJSON();
    } else if (object instanceof Array || object.toArray) {
        if (object.toArray) {
            object = object.toArray();
        }
        ret = [];
        for (i = 0; i < object.length; i++) {
            ret.push(normalizeJSON(object[i]));
        }
    } else {
        ret = {};
        for (k in object) {
            if (object[k] === object) {
                ret[k] = "[[recursive object]]";
            } else {
                ret[k] = normalizeJSON(object[k]);
            }
        }
    }

    return ret;
}

function Util(root) {
    Object.defineProperty(this, "rootLength", {
        value: root.length,
        writable: false,
        configurable: false,
    });
    Object.defineProperty(this, "mongoEnabled", {
        value: false,
    });
    Object.defineProperty(this, "consoleEnabled", {
        value: false,
    });

    this.enableMongo = () => this.mongoEnabled = true;
    this.enableConsole = () => this.consoleEnabled = true;

    this.disableMongo = () => this.mongoEnabled = false;
    this.disableConsole = () => this.consoleEnabled = false;
}

module.exports = () => {
    let util;

    return {
        initUtil: root => util = new Util(root),
        getUtil: () => util,
        stringify: obj => normalizeJSON(obj),
    }
};
