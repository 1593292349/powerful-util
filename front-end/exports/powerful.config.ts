import {defineConfig} from 'powerful-cli';
import config from 'powerful-cli/config/powerful.config';

export default defineConfig<CONFIG.Extra>(async (
	{
		returnCheck,
		baseDir,
		packageJson,
		args,
		command,
		utils:{
			extend,
			copyReplace,
			copyCover,
			copyCustom,
			dateFormat,
		},
	},
) => {
	return returnCheck({
		extendConfigs:[
			config,
		],
		extraProp:'v5',
	});
}, async (
	{
		extendConfigs,
		envPath,
		extraEnv,
		extraProp,
		returnCheck,
		baseDir,
		packageJson,
		args,
		command,
		utils:{
			extend,
			copyReplace,
			copyCover,
			copyCustom,
			dateFormat,
		},
	},
) => {
	return returnCheck({
		extraEnv:{
			extraProp,
		},
	});
});