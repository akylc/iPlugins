/**
 * 防抖函数
 * :指触发执行后, 必须"冷却"一段时间, 如果在"冷却"时间内再次触发函数, 则函数不会被执行, 反而会重新计算"冷却"时间
 * @param fn 要执行的函数
 * @param interval 时间间隔(毫秒)
*/
export default function iDebounce(fn, interval) {
    var lastTime = 0;
    return function () {
        if (Date.now() - lastTime > interval) {
            fn.apply(this, arguments);
        }
        lastTime = Date.now();
    };
}
