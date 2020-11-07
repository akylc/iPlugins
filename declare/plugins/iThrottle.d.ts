/**
 * 节流函数
 * :指一定时间内只能触发一次函数
 * @param fn 要执行的函数
 * @param interval 时间间隔(毫秒)
*/
export default function iThrottle(fn: any, interval: any): (ev: any) => void;
