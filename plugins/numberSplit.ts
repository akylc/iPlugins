/** 
 * 数字分割
 * @param number 要分割的数字
 */
export default function iNumSplit(number: number | string){
    if (!number) { return ''; }
    const strArr = (number + '')
        .split('')
        .reverse()
        .join('')
        .replace(/(\d{3})(?=\d)/g, '$1,')
        .split('')
        .reverse();
    return strArr.join('');
}