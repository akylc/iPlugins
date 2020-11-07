/**
 * 实例方法: 解析时间戳
 * :将时间戳解析成对应的时间格式并输出
 * @param ts 时间戳
 * @param format 想要返回的时间格式, 例如: 'yyyy/mm/dd hh:mm:ss.ms'
 */
export default function iTimestamp(timestamp, format = 'yyyy/mm/dd hh:mm:ss.ms'){
    const oDate = new Date(timestamp*1000);
    const matchResult = format.match(/^(y{2}|y{4})?([^ymdhs]{1})?(m{1,2})?([^ymdhs]{1})?(d{1,2})?([^ymdhs]{1})?(h{1,2})?([^ymdhs]{1})?(m{1,2})?([^ymdhs]{1})?(s{1,2})?([^ymdhs]{1})?(ms)?([^ymdhs]{1})?$/i);
    // 格式错误中断解析
    if(!matchResult) {
        console.error('时间戳解析失败, 格式错误');
        return ;
    }
    
    // 年
    let y = oDate.getFullYear();
    let year = matchResult[1] ? (matchResult[1].length === 4 ? y : ~~((''+y).slice(2))) : '';
    let yearSymbol = matchResult[2] || '';
    // 月
    let m = oDate.getMonth() + 1;
    let month = matchResult[3] ? ((matchResult[3].length === 1 ? m : m<10 ? '0'+m : m)) : '';
    let monthSymbol = matchResult[4] || '';
    // 日
    let d = oDate.getDate();
    let date = matchResult[5] ? ((matchResult[5].length === 1 ? d : d<10 ? '0'+d : d)) : '';
    // 中间符号
    let delimiter = matchResult[6] || '';
    // 时
    let h = oDate.getHours();
    let hour = matchResult[7] ? ((matchResult[7].length === 1 ? h : h<10 ? '0'+h : h)) : '';
    let hourSymbol = matchResult[8] || '';
    // 分
    let mm = oDate.getMinutes();
    let minute = matchResult[9] ? ((matchResult[9].length === 1 ? mm : mm<10 ? '0'+mm : mm)) : '';
    let minuteSymbol = matchResult[10] || '';
    // 秒
    let s = oDate.getSeconds();
    let second = matchResult[11] ? ((matchResult[11].length === 1 ? s : s<10 ? '0'+s : s)) : '';
    let secondSymbol = matchResult[12] || '';
    // 毫秒
    let ms = oDate.getMilliseconds();
    let millisecond = matchResult[13] ? ms : '';
    let millisecondSymbol = matchResult[14] || '';

    return `${year}${yearSymbol}${month}${monthSymbol}${date}${delimiter}${hour}${hourSymbol}${minute}${minuteSymbol}${second}${secondSymbol}${millisecond}${millisecondSymbol}`;
}