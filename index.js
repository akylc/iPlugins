(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./plugins/iNumToTime", "./plugins/iThrottle", "./plugins/iDebounce", "./plugins/iTimestamp"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.iTimestamp = exports.iDebounce = exports.iThrottle = exports.iSecToTime = void 0;
    var iNumToTime_1 = require("./plugins/iNumToTime");
    exports.iSecToTime = iNumToTime_1["default"];
    var iThrottle_1 = require("./plugins/iThrottle");
    exports.iThrottle = iThrottle_1["default"];
    var iDebounce_1 = require("./plugins/iDebounce");
    exports.iDebounce = iDebounce_1["default"];
    var iTimestamp_1 = require("./plugins/iTimestamp");
    exports.iTimestamp = iTimestamp_1["default"];
});
