(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    /**
     * 节流函数
     * :指一定时间内只能触发一次函数
     * @param fn 要执行的函数
     * @param interval 时间间隔(毫秒)
    */
    function iThrottle(fn, interval) {
        var lastTime = Date.now();
        return function (ev) {
            if (Date.now() - lastTime >= interval) {
                lastTime = Date.now();
                fn.apply(this, arguments);
            }
        };
    }
    exports["default"] = iThrottle;
});
