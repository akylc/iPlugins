import iSecToTime from './plugins/iNumToTime';
import iThrottle from './plugins/iThrottle';
import iDebounce from './plugins/iDebounce';
import iTimestamp from './plugins/iTimestamp';
import { iCoding10To62, iCoding62To10 } from './plugins/iCoding';
import iNumSplit from './plugins/numberSplit';
import lrz from './cloneRepository/lrz.all.bundle.min.js';
import './plugins/Array.vaSort';
declare const iSort: (opts: {
    [key: string]: 1 | -1;
}) => any[];
export { iSecToTime, iThrottle, iDebounce, iTimestamp, iCoding10To62, iCoding62To10, iNumSplit, lrz, iSort };
