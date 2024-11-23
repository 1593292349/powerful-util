const {pathsToModuleNameMapper} = require('ts-jest');
const {compilerOptions} = require('./tsconfig');

const paths = pathsToModuleNameMapper(compilerOptions.paths);
for(const key of Object.keys(paths)){
	paths[key] = '<rootDir>/' + paths[key];
}
module.exports = {
	testEnvironment:'jsdom',
	preset:'ts-jest/presets/js-with-ts',
	testMatch:['<rootDir>/test/**/*.test.[jt]s'],
	moduleNameMapper:paths,
	rootDir:__dirname,
};