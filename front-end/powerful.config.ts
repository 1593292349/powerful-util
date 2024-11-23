import {
	defineConfig,
} from 'powerful-cli';
import config from 'powerful-cli/config/powerful.config';

type Extra = {
	context:{
		platform:'node' | 'umd' | undefined;
	};
};

export default defineConfig<Extra>(async (
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
	const context:Extra['context'] = {
		platform:args.platform as any,
	};
	return returnCheck({
		extendConfigs:[
			config,
		],
		envPath:'env',
		extraEnv:{
		},
		context,
	});
}, async (
	{
		extendConfigs,
		envPath,
		extraEnv,
		context,
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
		debug:false,
		devServer:{
		},
		emitEntryInjectJs:{
		},
		pages:{
			index:'doc/main.ts',
		},
		htmlTemplate:{
			favicon:'template/favicon.ico',
			minify:undefined,
			templateParameters:{
			},
			inject:false,
		},
		publicPath:'auto',
		outputDir:'dist',
		alias:{
		},
		buildFile:{
			emit:command !== 'serve',
			name:command === 'lib'
				? 'lib/build-info.txt'
				: 'build-info.txt',
			content:[
				`构建平台: ${context.platform}`,
			],
		},
		emitFiles:{
		},
		definePlugin:{
		},
		vConsole:{
			active:false,
			vue:true,
		},
		buildConfig:{
			buildConsole:'normal',
			minimize:'swc',
			sourceMap:true,
			cssSourceMap:false,
			sourceLog:true,
		},
		libConfig:{
			html:{
				template:'template/index.html',
				templateContent:false,
				filename:'index.html',
				title:'',
				favicon:'',
				minify:true,
				templateParameters:undefined,
				inject:undefined,
				publicPath:'lib/',
				base:undefined,
				meta:undefined,
				scriptLoading:'blocking',
			},
			buildConsole:'normal',
			name:packageJson.name,
			entry:'src/index.ts',
			minimize:'swc',
			sourceMap:context.platform === 'umd',
			cssSourceMap:false,
			sourceLog:true,
			externals:{
			},
			export:undefined,
			polyfillAll:true,
		},
		copy:{
			dir:'static',
			to:undefined,
			toType:undefined,
			minimize:true,
			filter:undefined,
			transformer:undefined,
		},
		babel:{
			presetOption:{
				browserslistEnv:undefined,
				debug:false,
				useBuiltIns:'usage',
				...(
					context.platform === 'node'
						? {
							ignoreBrowserslistConfig:true,
							targets:'node 14.21',
						}
						: {}
				),
			},
			plugins:[
			],
			polyfills:[
			],
			extraPolyfills:context.platform === 'node'
				? copyCover([
				])
				: [
				],
			transpileDependencies:[
			],
			extraEntry:[
			],
		},
		typescript:{
			active:true,
			configFile:undefined,
		},
		eslint:{
			active:true,
			extensions:[
			],
		},
		cacheGroups:{
		},
		report:{
			emit:true,
			type:'html',
			filename:'report',
			statsOptions:null,
		},
		fileManager:command === 'lib'
			? {
				events:{
					onEnd:[
						{
							copy:[
								{
									source:'./dist/{index.js,index.js.map}',
									destination:'./dist/lib',
								},
							],
						},
						{
							delete:[
								{
									source:'./dist/{index.js,index.js.map}',
									options:{
										force:true,
									},
								},
								{
									source:`./lib/${context.platform}`,
									options:{
										force:true,
									},
								},
							],
						},
						{
							copy:[
								{
									source:'./dist/lib',
									destination:`./lib/${context.platform}`,
								},
							],
						},
					],
				},
			}
			: undefined,
		webpackConfig:{
			performance:{
				hints:false,
			},
		},
	});
});