import { getClassModificationDecorator } from '@writetome51/get-class-modification-decorator';
import { modifyObject } from '@writetome51/modify-object';


/*****************
 Usage:

@Modify(changes: object)
export class TheClass {...}
 *****************/

export const Modify: (changes) => Function =
	getClassModificationDecorator(
		(instance, decoratorArgs: [any]) => {
			let changes = decoratorArgs[0];
			modifyObject(instance, changes);
		}
	)
;


