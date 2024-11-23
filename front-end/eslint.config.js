module.exports = (async () => {
	const {default:configs} = await import('eslint-config-powerful');
	return [
		{
			ignores:[
				'lib/',
			],
		},
		...configs,
		{
			files:[
				'**/powerful.config.ts',
			],
			rules:{
				'@typescript-eslint/no-unused-vars':'off',
			},
		},
	];
})();