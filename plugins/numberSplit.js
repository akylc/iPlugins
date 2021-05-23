"use strict";
exports.__esModule = true;
/**
 * 数字分割
 * @param number 要分割的数字
 */
function default_1(number) {
    if (!number) {
        return '';
    }
    var strArr = (number + '')
        .split('')
        .reverse()
        .join('')
        .replace(/(\d{3})(?=\d)/g, '$1,')
        .split('')
        .reverse();
    return strArr.join('');
}
exports["default"] = default_1;
