import 'powerful-cli/types';

declare global{
	namespace CONFIG{
		type Extra = {
			extraProp:'v5' | 'v8';
		};
	}
}
export {};