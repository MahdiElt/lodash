const _ = {
    clamp(num, lowerB, upperB) {
        const lowerClampedValue = Math.max(num,lowerB);
        const clampedValue = Math.min(upperB, lowerClampedValue);
        return clampedValue
    },
    inRange(num, start, end) {
        if (typeof end === 'undefined') {
            var end = start;
            var start = 0;
        } if (start > end) {
            var temp = end;
            var end = start;
            var start = temp;
        }
        const isInRange = (start <= num && num < end);
        return isInRange
    },
    words(string) {
        words = string.split(' ');
        return words
    },
    pad(str, len) {
        if (len <= str.length) {
            return str
        } else {
            var startP = Math.floor((len-str.length)/2);
            var endP = len - startP - str.length;
            var padString = ' '.repeat(startP) + str + ' '.repeat(endP);
            return padString
        }

    },
    has(obj, key) {
        var hasValue = (obj[key] !== undefined)
        return hasValue
    },
    invert(obj) {
        var newObj = {};
        for (key in obj) {
            const originalValue = obj[key];
            newObj[originalValue] = key;
        }
        return newObj
    },
    findKey(obj, predicate) {
        for (key in obj) {
            var value = obj[key];
            var predicateReturnValue = predicate(value);
            if (predicateReturnValue === true) {
                return key
            }
            return undefined
        }
    },
    drop(arr, n) {
        if (n === undefined) {
            var n = 1;
        }
        newArr = arr.slice(n,arr.length);
        return newArr
    },
    dropWhile(arr, predicate) {
        const dropNumber = arr.findIndex(function (element, index) { return !predicate(element, index, arr)});
        const droppedArray = this.drop(arr, dropNumber);
        return droppedArray
    },
    chunk(arr, size) {
        if (typeof size === undefined) {
            var size = 1
        }
        var arrChunks = [];
        for (i = 0; i < arr.length; i+= size) {
            var arrChunk = arr.slice(i, i+size)
            arrChunks.push(arrChunk)
        }
        return arrChunks
    }
};

console.log({key: 'value'}.notkey)


// Do not write or modify code below this line.
module.exports = _;