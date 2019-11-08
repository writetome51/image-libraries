import { getClassModificationDecorator } from './get-class-modification-decorator';


/*****************
Usage:

@attach_prefix('string')
export class TheClass {...}
 *****************/

export const attach_prefix: (prefix: string) => Function =
	getClassModificationDecorator((instance, decoratorArgs: [string]) => {
		let str = decoratorArgs[0];
		instance.name = str + ' ' + instance.name;
	});


export class Employee {
	name = 'employee';
}


@attach_prefix('subordinate ')
export class Subordinate extends Employee {
}
