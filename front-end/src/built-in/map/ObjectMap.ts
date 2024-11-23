export default class ObjectMap<V> implements Map<string, V>{
	private _cache:Record<string, V> = Object.create(null);
	constructor(iterable?:Iterable<readonly [string, V]>){
		if(iterable){
			const {
				_cache,
			} = this;
			if(Array.isArray(iterable)){
				for(let i = 0; i < iterable.length; ++i){
					const [k, v] = iterable[i];
					_cache[k] = v;
				}
			}else{
				for(const [k, v] of iterable){
					_cache[k] = v;
				}
			}
		}
	}

	has(key:string):boolean{
		return key in this._cache;
	}

	get(key:string):V | undefined{
		return this._cache[key];
	}

	set(key:string, value:V):this{
		this._cache[key] = value;
		return this;
	}

	delete(key:string):boolean{
		return delete this._cache[key];
	}

	clear():void{
		this._cache = Object.create(null);
	}

	forEach(callbackfn:(value:V, key:string, map:Map<string, V>) => void, thisArg?:any){
		for(const [key, value] of this.entries()){
			callbackfn.call(thisArg, value, key, this);
		}
	}

	get size():number{
		return Object.keys(this._cache).length;
	}

	readonly [Symbol.toStringTag] = 'ObjectMap';
	[Symbol.iterator]():ReturnType<Map<string, V>['entries']>{
		return this.entries();
	}

	* entries():ReturnType<Map<string, V>['entries']>{
		const {
			_cache,
		} = this;
		const keys = Object.keys(_cache);
		for(let i = 0; i < keys.length; ++i){
			const key = keys[i];
			yield [key, _cache[key]];
		}
	}

	* keys():ReturnType<Map<string, V>['keys']>{
		const keys = Object.keys(this._cache);
		for(let i = 0; i < keys.length; ++i){
			yield keys[i];
		}
	}

	* values():ReturnType<Map<string, V>['values']>{
		const {
			_cache,
		} = this;
		const keys = Object.keys(_cache);
		for(let i = 0; i < keys.length; ++i){
			yield _cache[keys[i]];
		}
	}

	keysArray():string[]{
		return Object.keys(this._cache);
	}

	valuesArray():V[]{
		const {
			_cache,
		} = this;
		const keys = Object.keys(_cache);
		const values:V[] = new Array(keys.length);
		for(let i = 0; i < keys.length; ++i){
			values[i] = _cache[keys[i]];
		}
		return values;
	}
}