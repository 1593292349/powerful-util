export default class ObjectMap<V> implements Map<string, V> {
    private _cache;
    constructor(iterable?: Iterable<readonly [string, V]>);
    has(key: string): boolean;
    get(key: string): V | undefined;
    set(key: string, value: V): this;
    delete(key: string): boolean;
    clear(): void;
    forEach(callbackfn: (value: V, key: string, map: Map<string, V>) => void, thisArg?: any): void;
    get size(): number;
    readonly [Symbol.toStringTag] = "ObjectMap";
    [Symbol.iterator](): ReturnType<Map<string, V>['entries']>;
    entries(): ReturnType<Map<string, V>['entries']>;
    keys(): ReturnType<Map<string, V>['keys']>;
    values(): ReturnType<Map<string, V>['values']>;
    keysArray(): string[];
    valuesArray(): V[];
}
