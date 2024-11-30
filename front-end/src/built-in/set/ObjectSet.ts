export default class ObjectSet implements Set<string>{
	private _cache:Record<string, null> = Object.create(null);
	constructor(iterable?:Iterable<string>){
		if(iterable){
			const {
				_cache,
			} = this;
			if(Array.isArray(iterable)){
				for(let i = 0; i < iterable.length; ++i){
					_cache[iterable[i]] = null;
				}
			}else{
				for(const k of iterable){
					_cache[k] = null;
				}
			}
		}
	}

	has(key:string):boolean{
		return key in this._cache;
	}

	add(key:string):this{
		this._cache[key] = null;
		return this;
	}

	delete(key:string):boolean{
		return delete this._cache[key];
	}

	clear():void{
		this._cache = Object.create(null);
	}

	forEach(callbackfn:(value:string, value2:string, set:Set<string>) => void, thisArg?:any):void{
		for(const value of this.values()){
			callbackfn.call(thisArg, value, value, this);
		}
	}

	get size():number{
		return Object.keys(this._cache).length;
	}

	get [Symbol.toStringTag](){
		return 'ObjectSet';
	}

	[Symbol.iterator]():SetIterator<string>{
		return this.values();
	}

	* entries():SetIterator<[string, string]>{
		const keys = Object.keys(this._cache);
		for(let i = 0; i < keys.length; ++i){
			const key = keys[i];
			yield [key, key];
		}
	}

	keys():SetIterator<string>{
		return this.values();
	}

	* values():SetIterator<string>{
		const keys = Object.keys(this._cache);
		for(let i = 0; i < keys.length; ++i){
			yield keys[i];
		}
	}

	keysArray():string[]{
		return this.valuesArray();
	}

	valuesArray():string[]{
		return Object.keys(this._cache);
	}

	intersection<U>(other:ReadonlySetLike<U>):Set<string & U>{
		console.log(other);
		return new Set();
	}

	union<U>(other:ReadonlySetLike<U>):Set<string | U>{
		console.log(other);
		return new Set();
	}

	difference<U>(other:ReadonlySetLike<U>):Set<string>{
		const result = new ObjectSet();
		//这里追求性能, 冗余代码
		const keys = Object.keys(this._cache);
		for(let i = 0; i < keys.length; ++i){
			const key = keys[i];
			if(!other.has(key as any)){
				result.add(key);
			}
		}
		return result;
	}

	symmetricDifference<U>(other:ReadonlySetLike<U>):Set<string | U>{
		console.log(other);
		return new Set();
	}

	isSubsetOf(other:ReadonlySetLike<unknown>):boolean{
		if(this.size > other.size){
			return false;
		}else{
			//这里追求性能, 冗余代码
			const keys = Object.keys(this._cache);
			for(let i = 0; i < keys.length; ++i){
				const key = keys[i];
				if(!other.has(key)){
					return false;
				}
			}
			return true;
		}
	}

	isSupersetOf(other:ReadonlySetLike<unknown>):boolean{
		if(this.size < other.size){
			return false;
		}else{
			if(other instanceof ObjectSet){
				//这里追求性能, 冗余代码
				const keys = Object.keys(other._cache);
				for(let i = 0; i < keys.length; ++i){
					const key = keys[i];
					if(!this.has(key as any)){
						return false;
					}
				}
			}else{
				const iterator = other.keys();
				let result = iterator.next();
				while(!result.done){
					if(!this.has(result.value as any)){
						return false;
					}
					result = iterator.next();
				}
			}
			return true;
		}
	}

	isDisjointFrom(other:ReadonlySetLike<unknown>):boolean{
		if(this.size <= other.size){
			//这里追求性能, 冗余代码
			const keys = Object.keys(this._cache);
			for(let i = 0; i < keys.length; ++i){
				const key = keys[i];
				if(other.has(key)){
					return false;
				}
			}
		}else{
			if(other instanceof ObjectSet){
				//这里追求性能, 冗余代码
				const keys = Object.keys(other._cache);
				for(let i = 0; i < keys.length; ++i){
					const key = keys[i];
					if(this.has(key)){
						return false;
					}
				}
			}else{
				const iterator = other.keys();
				let result = iterator.next();
				while(!result.done){
					if(this.has(result.value as any)){
						return false;
					}
					result = iterator.next();
				}
			}
		}
		return true;
	}
}