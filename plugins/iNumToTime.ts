/**
 * 秒数转时间
 * @param num 要转换的秒数
 * @param format 输出的时间格式, 默认'dd:hh:mm:ss'
*/
export default function iSecToTime(num: number, format = 'dd:hh:mm:ss'){
    try{
        if(num < 0) num = 0;
        /** 匹配格式 */
        let timeFormat = format.match(/^(d{1,2})?([^dhms]{1})?(h{1,2})?([^dhms]{1,2})?(m{1,2})?([^dhms]{1,2})?(s{1,2})?$/i);
        /** 天 */
        let date = ~~(num / 86400);
        /**
         * 小时数
         * 如果不存大于小时数的单位时, 就会把秒数转换成对应的小时数
         */
        let hour = timeFormat[1] ? ~~(num / 3600 % 24) : ~~(num / 3600);
        /**
         * 分钟数
         * 当不存比分钟数大的单位时, 就会把秒数转换成对应的分钟数
         */
        let minute = timeFormat[1] || timeFormat[3] ? ~~(num / 60) % 60 : ~~(num / 60);
        /**
         * 秒数
         * 当不存比秒数大的单位时, 就直接返回秒数
         */
        let second = timeFormat[1] || timeFormat[3] || timeFormat[5] ? ~~(num % 60) : num;
    
        let d = timeFormat[1] ? (timeFormat[1].length == 2 ? date < 10 ? '0'+date : date : date) : '';
        let h = timeFormat[3] ? (timeFormat[3].length == 2 ? hour < 10 ? '0'+hour : hour : hour) : '';
        let m = timeFormat[5] ? (timeFormat[5].length == 2 ? minute < 10 ? '0'+minute : minute : minute) : '';
        let s = timeFormat[7] ? (timeFormat[7].length == 2 ? second < 10 ? '0'+second : second : second) : '';
        return `${d}${timeFormat[2] || ''}${h}${timeFormat[4] || ''}${m}${timeFormat[6] || ''}${s}`;
    } catch(err){
        return '时间格式有误!';
    }
}