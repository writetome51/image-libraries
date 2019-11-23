import { getClassModificationDecorator } from '@writetome51/get-class-modification-decorator';
import { modifyObject } from '@writetome51/modify-object';


/*****************
 Usage:

@Modify(changes)
export class TheClass {...}
 *****************/

export const Modify: (params: any) => Function =
	getClassModificationDecorator(
		(instance, decoratorArgs: [any]) => {
			let changes = decoratorArgs[0];
			modifyObject(instance, changes);
		}
	);
