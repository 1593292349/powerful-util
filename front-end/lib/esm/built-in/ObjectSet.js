export default class ObjectSet {
    _cache = Object.create(null);
    constructor(iterable) {
        if (iterable) {
            const { _cache, } = this;
            if (Array.isArray(iterable)) {
                for (let i = 0; i < iterable.length; ++i) {
                    _cache[iterable[i]] = undefined;
                }
            }
            else {
                for (const k of iterable) {
                    _cache[k] = undefined;
                }
            }
        }
    }
    has(key) {
        return key in this._cache;
    }
    add(key) {
        this._cache[key] = undefined;
        return this;
    }
    delete(key) {
        return delete this._cache[key];
    }
    clear() {
        this._cache = Object.create(null);
    }
    forEach(callbackfn, thisArg) {
        for (const value of this.values()) {
            callbackfn.call(thisArg, value, value, this);
        }
    }
    get size() {
        return Object.keys(this._cache).length;
    }
    [Symbol.toStringTag] = 'ObjectSet';
    [Symbol.iterator]() {
        return this.values();
    }
    *entries() {
        const keys = Object.keys(this._cache);
        for (let i = 0; i < keys.length; ++i) {
            const key = keys[i];
            yield [key, key];
        }
    }
    keys() {
        return this.values();
    }
    *values() {
        const keys = Object.keys(this._cache);
        for (let i = 0; i < keys.length; ++i) {
            yield keys[i];
        }
    }
    keysArray() {
        return this.valuesArray();
    }
    valuesArray() {
        return Object.keys(this._cache);
    }
    intersection(other) {
        console.log(other);
        return new Set();
    }
    union(other) {
        console.log(other);
        return new Set();
    }
    difference(other) {
        const result = new ObjectSet();
        for (const key of this.values()) {
            if (!other.has(key)) {
                result.add(key);
            }
        }
        return result;
    }
    symmetricDifference(other) {
        console.log(other);
        return new Set();
    }
    isSubsetOf(other) {
        if (this.size > other.size) {
            return false;
        }
        else {
            for (const key of this.values()) {
                if (!other.has(key)) {
                    return false;
                }
            }
            return true;
        }
    }
    isSupersetOf(other) {
        if (this.size < other.size) {
            return false;
        }
        else {
            const set = { [Symbol.iterator]: other.keys.bind(other) };
            for (const key of set) {
                if (!this.has(key)) {
                    return false;
                }
            }
            return true;
        }
    }
    isDisjointFrom(other) {
        if (this.size <= other.size) {
            for (const key of this.values()) {
                if (other.has(key)) {
                    return false;
                }
            }
        }
        else {
            const set = { [Symbol.iterator]: other.keys.bind(other) };
            for (const key of set) {
                if (this.has(key)) {
                    return false;
                }
            }
        }
        return true;
    }
}
