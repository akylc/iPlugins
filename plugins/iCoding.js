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
    exports.iCoding62To10 = exports.iCoding10To62 = void 0;
    /**
     * 10进制转62进制
     * @param number 要转换的整数
     */
    function iCoding10To62(number) {
        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ'.split(''), radix = chars.length, qutient = +number, arr = [];
        do {
            var mod = qutient % radix;
            qutient = (qutient - mod) / radix;
            arr.unshift(chars[mod]);
        } while (qutient);
        return arr.join('');
    }
    exports.iCoding10To62 = iCoding10To62;
    /**
     * 62进制转10进制
     * @param coding 62进制的字符串
     */
    function iCoding62To10(coding) {
        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ', radix = chars.length, coding = String(coding), len = coding.length, i = 0, origin_number = 0;
        while (i < len) {
            origin_number += Math.pow(radix, i++) * chars.indexOf(coding.charAt(len - i) || '0');
        }
        return origin_number;
    }
    exports.iCoding62To10 = iCoding62To10;
});
