export interface VueMount {
    /**
     * 防抖函数
     * :指触发执行后, 必须"冷却"一段时间, 如果在"冷却"时间内再次触发函数, 则函数不会被执行, 反而会重新计算"冷却"时间
     * @param fn 要执行的函数
     * @param interval 时间间隔(毫秒)
    */
    $iDebounce(fn: any, interval: any): (...arg) => void;
    /**
     * 节流函数
     * :指一定时间内只能触发一次函数
     * @param fn 要执行的函数
     * @param interval 时间间隔(毫秒)
    */
    $iThrottle(fn: any, interval: any): (...arg) => void;
    /**
     * 解析时间戳
     * :将时间戳解析成对应的时间格式并输出
     * @param ts 时间戳
     * @param format 想要返回的时间格式, 例如: 'yyyy/mm/dd hh:mm:ss.ms'
     */
    $iTimestamp(ts: number, format: string): string;
}

declare module 'vue/types/vue' {
    interface Vue extends VueMount {}
}