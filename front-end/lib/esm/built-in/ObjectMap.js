export default class ObjectMap {
    _cache = Object.create(null);
    constructor(iterable) {
        if (iterable) {
            const { _cache, } = this;
            if (Array.isArray(iterable)) {
                for (let i = 0; i < iterable.length; ++i) {
                    const [k, v] = iterable[i];
                    _cache[k] = v;
                }
            }
            else {
                for (const [k, v] of iterable) {
                    _cache[k] = v;
                }
            }
        }
    }
    has(key) {
        return key in this._cache;
    }
    get(key) {
        return this._cache[key];
    }
    set(key, value) {
        this._cache[key] = value;
        return this;
    }
    delete(key) {
        return delete this._cache[key];
    }
    clear() {
        this._cache = Object.create(null);
    }
    forEach(callbackfn, thisArg) {
        for (const [key, value] of this.entries()) {
            callbackfn.call(thisArg, value, key, this);
        }
    }
    get size() {
        return Object.keys(this._cache).length;
    }
    [Symbol.toStringTag] = 'ObjectMap';
    [Symbol.iterator]() {
        return this.entries();
    }
    *entries() {
        const { _cache, } = this;
        const keys = Object.keys(_cache);
        for (let i = 0; i < keys.length; ++i) {
            const key = keys[i];
            yield [key, _cache[key]];
        }
    }
    *keys() {
        const keys = Object.keys(this._cache);
        for (let i = 0; i < keys.length; ++i) {
            yield keys[i];
        }
    }
    *values() {
        const { _cache, } = this;
        const keys = Object.keys(_cache);
        for (let i = 0; i < keys.length; ++i) {
            yield _cache[keys[i]];
        }
    }
    keysArray() {
        return Object.keys(this._cache);
    }
    valuesArray() {
        const { _cache, } = this;
        const keys = Object.keys(_cache);
        const values = new Array(keys.length);
        for (let i = 0; i < keys.length; ++i) {
            values[i] = _cache[keys[i]];
        }
        return values;
    }
}
