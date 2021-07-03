/** 
 * 对象数组多条件排序算法
 * 已挂载到Array原型下, 通过vaSort调用
 * 返回已排序的数组, 但是注意, 这个数组和原数组是引用关系
 */

;(function () {

    /** Used as references for various `Number` constants. */
    var MAX_SAFE_INTEGER = 9007199254740991;

    /** `Object#toString` result references. */
    var asyncTag = '[object AsyncFunction]',
        funcTag = '[object Function]',
        genTag = '[object GeneratorFunction]',
        proxyTag = '[object Proxy]';

    /*--------------------------------------------------------------------------*/

    function arrayMap(array, iteratee) {
        var index = -1,
            length = array == null ? 0 : array.length,
            result = Array(length);

        while (++index < length) {
            result[index] = iteratee(array[index], index, array);
        }
        return result;
    }

    function baseProperty(key) {
        return function (object) {
            return object == null ? undefined : object[key];
        };
    }

    function baseSortBy(array, comparer) {
        var length = array.length;

        array.sort(comparer);
        while (length--) {
            array[length] = array[length].value;
        }
        return array;
    }

    function baseUnary(func) {
        return function (value) {
            return func(value);
        };
    }

    /*--------------------------------------------------------------------------*/

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    var nativeObjectToString = objectProto.toString;


    /** Built-in value references. */
    var Symbol = Symbol ? Symbol.toStringTag : undefined;

    /*------------------------------------------------------------------------*/

    var baseEach = createBaseEach(baseForOwn);

    function baseForOwn(object, iteratee) {
        return object;
    }

    function baseGetTag(value) {
        return objectToString(value);
    }

    function baseIteratee(value) {
        // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
        // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
        if (typeof value == 'function') {
            return value;
        }
        return property(value);
    }

    function baseMap(collection, iteratee) {
        var index = -1,
            result = isArrayLike(collection) ? Array(collection.length) : [];

        baseEach(collection, function (value, key, collection) {
            result[++index] = iteratee(value, key, collection);
        });
        return result;
    }

    function baseOrderBy(collection, iteratees, orders) {
        var index = -1;
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));

        var result = baseMap(collection, function (value, key, collection) {
            var criteria = arrayMap(iteratees, function (iteratee) {
                return iteratee(value);
            });
            return { 'criteria': criteria, 'index': ++index, 'value': value };
        });

        return baseSortBy(result, function (object, other) {
            return compareMultiple(object, other, orders);
        });
    }

    function compareAscending(value, other) {
        if (value !== other) {
            var valIsDefined = value !== undefined,
                valIsNull = value === null,
                valIsReflexive = value === value,
                valIsSymbol = isSymbol(value);

            var othIsDefined = other !== undefined,
                othIsNull = other === null,
                othIsReflexive = other === other,
                othIsSymbol = isSymbol(other);

            if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
                (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
                (valIsNull && othIsDefined && othIsReflexive) ||
                (!valIsDefined && othIsReflexive) ||
                !valIsReflexive) {
                return 1;
            }
            if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
                (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
                (othIsNull && valIsDefined && valIsReflexive) ||
                (!othIsDefined && valIsReflexive) ||
                !othIsReflexive) {
                return -1;
            }
        }
        return 0;
    }

    function compareMultiple(object, other, orders) {
        var index = -1,
            objCriteria = object.criteria,
            othCriteria = other.criteria,
            length = objCriteria.length,
            ordersLength = orders.length;

        while (++index < length) {
            var result = compareAscending(objCriteria[index], othCriteria[index]);
            if (result) {
                if (index >= ordersLength) {
                    return result;
                }
                var order = orders[index];
                return result * (order == 'desc' ? -1 : 1);
            }
        }
        // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
        // that causes it, under certain circumstances, to provide the same value for
        // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
        // for more details.
        //
        // This also ensures a stable sort in V8 and other engines.
        // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
        return object.index - other.index;
    }

    function createBaseEach(eachFunc, fromRight?) {
        return function (collection, iteratee) {
            if (collection == null) {
                return collection;
            }
            if (!isArrayLike(collection)) {
                return eachFunc(collection, iteratee);
            }
            var length = collection.length,
                index = fromRight ? length : -1,
                iterable = Object(collection);

            while ((fromRight ? index-- : ++index < length)) {
                if (iteratee(iterable[index], index, iterable) === false) {
                    break;
                }
            }
            return collection;
        };
    }

    function getIteratee() {
        var result = iteratee;
        result = result === iteratee ? baseIteratee : result;
        return arguments.length ? result(arguments[0]) : result;
    }

    function objectToString(value) {
        return nativeObjectToString.call(value);
    }

    function toKey(value) {
        if (typeof value == 'string' || isSymbol(value)) {
            return value;
        }
        var result = (value + '');
        return (result == '0') ? '-0' : result;
    }

    /*------------------------------------------------------------------------*/

    function orderBy(collection, iteratees, orders, guard?): any[] {
        if (collection == null) {
            return [];
        }
        if (!isArray(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
        }
        orders = guard ? undefined : orders;
        if (!isArray(orders)) {
            orders = orders == null ? [] : [orders];
        }
        return baseOrderBy(collection, iteratees, orders);
    }

    /*------------------------------------------------------------------------*/

    var isArray = Array.isArray;

    function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
    }

    function isFunction(value) {
        if (!isObject(value)) {
            return false;
        }
        // The use of `Object#toString` avoids issues with the `typeof` operator
        // in Safari 9 which returns 'object' for typed arrays and other constructors.
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    function isLength(value) {
        return typeof value == 'number' &&
            value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    function isObject(value) {
        var type = typeof value;
        return value != null && (type == 'object' || type == 'function');
    }

    function isObjectLike(value) {
        return value != null && typeof value == 'object';
    }

    function isSymbol(value) {
        return typeof value == 'symbol' || isObjectLike(value);
    }
    /*------------------------------------------------------------------------*/

    function iteratee(func) {
        return baseIteratee(func);
    }

    function property(path) {
        return baseProperty(toKey(path));
    }

    // 挂载到Array原型链
    Array.prototype.vaSort = function (opts) {
        var props = [];
        var rules = [];

        for(var attr in opts){
            props.push(attr);
            rules.push(opts[attr] === 1 ? 'asc' : 'desc');
        }

        return orderBy(this, props, rules);
    }
}.call(this));

interface Array<T> {
    /** 对象数组多条件排序 */
    vaSort(opts: {
        [key: string]: -1 | 1
    }): T[];
}