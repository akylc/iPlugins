/// <reference path="./types/vueMount.d.ts" />
import * as i from './index';

export default function(Vue, options){
    /** 防抖函数 */
    Vue.prototype.$iDebounce = i.iDebounce;
    /** 节流函数 */
    Vue.prototype.$iThrottle = i.iThrottle;
    /** 解析时间戳 */
    Vue.prototype.$iTimestamp = i.iTimestamp;
}