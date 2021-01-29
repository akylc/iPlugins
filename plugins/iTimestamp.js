/**
 * 实例方法: 解析时间戳
 * :将时间戳解析成对应的时间格式并输出
 * @param ts 时间戳
 * @param format 想要返回的时间格式, 例如: 'yyyy/mm/dd hh:mm:ss.ms'
 */
export default function iTimestamp(timestamp, format) {
    if (format === void 0) { format = 'yyyy/mm/dd hh:mm:ss.ms'; }
    var oDate = new Date(timestamp);
    var matchResult = format.match(/^(y{2}|y{4})?([^ymdhs]{1})?(m{1,2})?([^ymdhs]{1})?(d{1,2})?([^ymdhs]{1})?(h{1,2})?([^ymdhs]{1})?(m{1,2})?([^ymdhs]{1})?(s{1,2})?([^ymdhs]{1})?(ms)?([^ymdhs]{1})?$/i);
    // 格式错误中断解析
    if (!matchResult) {
        console.error('时间戳解析失败, 格式错误');
        return;
    }
    // 年
    var y = oDate.getFullYear();
    var year = matchResult[1] ? (matchResult[1].length === 4 ? y : ~~(('' + y).slice(2))) : '';
    var yearSymbol = matchResult[2] || '';
    // 月
    var m = oDate.getMonth() + 1;
    var month = matchResult[3] ? ((matchResult[3].length === 1 ? m : m < 10 ? '0' + m : m)) : '';
    var monthSymbol = matchResult[4] || '';
    // 日
    var d = oDate.getDate();
    var date = matchResult[5] ? ((matchResult[5].length === 1 ? d : d < 10 ? '0' + d : d)) : '';
    // 中间符号
    var delimiter = matchResult[6] || '';
    // 时
    var h = oDate.getHours();
    var hour = matchResult[7] ? ((matchResult[7].length === 1 ? h : h < 10 ? '0' + h : h)) : '';
    var hourSymbol = matchResult[8] || '';
    // 分
    var mm = oDate.getMinutes();
    var minute = matchResult[9] ? ((matchResult[9].length === 1 ? mm : mm < 10 ? '0' + mm : mm)) : '';
    var minuteSymbol = matchResult[10] || '';
    // 秒
    var s = oDate.getSeconds();
    var second = matchResult[11] ? ((matchResult[11].length === 1 ? s : s < 10 ? '0' + s : s)) : '';
    var secondSymbol = matchResult[12] || '';
    // 毫秒
    var ms = oDate.getMilliseconds();
    var millisecond = matchResult[13] ? ms : '';
    var millisecondSymbol = matchResult[14] || '';
    return "" + year + yearSymbol + month + monthSymbol + date + delimiter + hour + hourSymbol + minute + minuteSymbol + second + secondSymbol + millisecond + millisecondSymbol;
}
