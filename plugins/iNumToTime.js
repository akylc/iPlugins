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
     * 秒数转时间
     * @param num 要转换的秒数
     * @param format 输出的时间格式, 默认'dd:hh:mm:ss'
    */
    function iSecToTime(num, format) {
        if (format === void 0) { format = 'dd:hh:mm:ss'; }
        try {
            if (num < 0)
                num = 0;
            /** 匹配格式 */
            var timeFormat = format.match(/^(d{1,2})?([^dhms]{1})?(h{1,2})?([^dhms]{1,2})?(m{1,2})?([^dhms]{1,2})?(s{1,2})?$/i);
            /** 天 */
            var date = ~~(num / 86400);
            /**
             * 小时数
             * 如果不存大于小时数的单位时, 就会把秒数转换成对应的小时数
             */
            var hour = timeFormat[1] ? ~~(num / 3600 % 24) : ~~(num / 3600);
            /**
             * 分钟数
             * 当不存比分钟数大的单位时, 就会把秒数转换成对应的分钟数
             */
            var minute = timeFormat[1] || timeFormat[3] ? ~~(num / 60) % 60 : ~~(num / 60);
            /**
             * 秒数
             * 当不存比秒数大的单位时, 就直接返回秒数
             */
            var second = timeFormat[1] || timeFormat[3] || timeFormat[5] ? ~~(num % 60) : num;
            var d = timeFormat[1] ? (timeFormat[1].length == 2 ? date < 10 ? '0' + date : date : date) : '';
            var h = timeFormat[3] ? (timeFormat[3].length == 2 ? hour < 10 ? '0' + hour : hour : hour) : '';
            var m = timeFormat[5] ? (timeFormat[5].length == 2 ? minute < 10 ? '0' + minute : minute : minute) : '';
            var s = timeFormat[7] ? (timeFormat[7].length == 2 ? second < 10 ? '0' + second : second : second) : '';
            return "" + d + (timeFormat[2] || '') + h + (timeFormat[4] || '') + m + (timeFormat[6] || '') + s;
        }
        catch (err) {
            return '时间格式有误!';
        }
    }
    exports["default"] = iSecToTime;
});
