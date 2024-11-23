import lib from '@/lib';
const {add} = lib;

test('add', () => {
	expect(add(1, 2)).toEqual(3);
});