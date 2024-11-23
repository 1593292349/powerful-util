module.exports = (async () => {
	const {default:configs} = await import('eslint-config-powerful');
	return [
		{
			ignores:[
				'node_modules/',
				'dist/',
				'lib/',
				'static/',
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