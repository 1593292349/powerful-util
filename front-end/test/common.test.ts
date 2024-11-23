import {
	ObjectMap,
	ObjectSet,
} from '@/built-in';

test('ObjectMap', () => {
	const map1 = new ObjectMap<string>();
	map1.set('a', '1');
	map1.set('b', '2');
	map1.set('c', '3');
	expect([...map1]).toEqual([
		['a', '1'],
		['b', '2'],
		['c', '3'],
	]);
	expect([...map1.keys()]).toEqual(['a', 'b', 'c']);
	expect([...map1.values()]).toEqual(['1', '2', '3']);

	const map2 = new ObjectMap<string>();
	map2.set('a', '1');
	map2.set('c', '3');
	map2.set('b', '2');
	expect([...map2]).toEqual([
		['a', '1'],
		['c', '3'],
		['b', '2'],
	]);
	expect([...map2.keys()]).toEqual(['a', 'c', 'b']);
	expect([...map2.values()]).toEqual(['1', '3', '2']);
});

test('ObjectSet', () => {
	const set1 = new ObjectSet();
	set1.add('a');
	set1.add('b');
	set1.add('c');
	expect([...set1]).toEqual(['a', 'b', 'c']);

	const set2 = new ObjectSet();
	set2.add('a');
	set2.add('c');
	set2.add('b');
	expect([...set2]).toEqual(['a', 'c', 'b']);
});