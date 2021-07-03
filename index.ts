import iSecToTime from './plugins/iNumToTime';
import iThrottle from './plugins/iThrottle';
import iDebounce from './plugins/iDebounce';
import iTimestamp from './plugins/iTimestamp';
import { iCoding10To62, iCoding62To10 } from './plugins/iCoding';
import iNumSplit from './plugins/numberSplit';
import lrz from './cloneRepository/lrz.all.bundle.min.js';

// 数组排序, Array原型同时挂载
import './plugins/Array.vaSort';
const iSort = Array.prototype.vaSort;

export {
    iSecToTime,
    iThrottle,
    iDebounce,
    iTimestamp,
    iCoding10To62,
    iCoding62To10,
    iNumSplit,

    lrz,

    iSort
}