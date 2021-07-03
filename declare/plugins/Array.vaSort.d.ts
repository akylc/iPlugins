/**
 * 对象数组多条件排序算法
 * 已挂载到Array原型下, 通过vaSort调用
 * 返回已排序的数组, 但是注意, 这个数组和原数组是引用关系
 */
interface Array<T> {
    /** 对象数组多条件排序 */
    vaSort(opts: {
        [key: string]: -1 | 1;
    }): T[];
}
