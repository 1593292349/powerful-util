export default class ObjectSet implements Set<string> {
    private _cache;
    constructor(iterable?: Iterable<string>);
    has(key: string): boolean;
    add(key: string): this;
    delete(key: string): boolean;
    clear(): void;
    forEach(callbackfn: (value: string, value2: string, set: Set<string>) => void, thisArg?: any): void;
    get size(): number;
    readonly [Symbol.toStringTag] = "ObjectSet";
    [Symbol.iterator](): SetIterator<string>;
    entries(): SetIterator<[string, string]>;
    keys(): SetIterator<string>;
    values(): SetIterator<string>;
    keysArray(): string[];
    valuesArray(): string[];
    intersection<U>(other: ReadonlySetLike<U>): Set<string & U>;
    union<U>(other: ReadonlySetLike<U>): Set<string | U>;
    difference<U>(other: ReadonlySetLike<U>): Set<string>;
    symmetricDifference<U>(other: ReadonlySetLike<U>): Set<string | U>;
    isSubsetOf(other: ReadonlySetLike<unknown>): boolean;
    isSupersetOf(other: ReadonlySetLike<unknown>): boolean;
    isDisjointFrom(other: ReadonlySetLike<unknown>): boolean;
}
