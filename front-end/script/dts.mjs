import {
	rm,
} from 'node:fs/promises';
import {
	exec,
} from 'node:child_process';
import chalk from 'chalk';

await Promise.all([
	rm('lib/types', {
		recursive:true,
		force:true,
	}),
	rm('lib/esm', {
		recursive:true,
		force:true,
	}),
]);
console.log(chalk.green('删除 lib/types、lib/esm'));
await tsc();
console.log(chalk.green('生成 lib/types、lib/esm'));
function tsc(){
	return new Promise((resolve, reject) => {
		exec(`tsc --project tsconfig.dts.json`, (
			error,
			stdout,
			stderr,
		) => {
			if(error){
				console.error(stderr);
				reject();
			}else{
				resolve();
			}
		});
	});
}