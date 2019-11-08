import { getClassModificationDecorator } from './get-class-modification-decorator';
import { ValidatingInputService } from './validating-inputs/validating-input.service';


/*****************
Decorator for certain ValidatingInputService subclasses.
 Usage:

@attach_prefix('string')
export class TheClass {...}
 *****************/

export const attach_prefix: (prefix: string) => Function =
	getClassModificationDecorator((instance: ValidatingInputService, decoratorArgs: [string]) => {

		let str = decoratorArgs[0].toLowerCase().trim();

		instance.data.id = str + '-' + instance.data.id;

		instance.data.propertyToBind = str + instance.data.placeholder;

		let capitalizedStr = str[0].toUpperCase() + str.slice(1);
		instance.data.placeholder = capitalizedStr + ' ' + instance.data.placeholder;

		instance.data.errorMessage = 'The ' + str + instance.data.errorMessage.slice(4);
	});


export function attachPrefix(obj, prefix, attachToPropertyToBind = false) {
	prefix = prefix.toLowerCase().trim();

	obj.data.id = prefix + '-' + obj.data.id;

	if (attachToPropertyToBind) obj.data.propertyToBind = prefix + obj.data.placeholder;

	let capitalizedStr = prefix[0].toUpperCase() + prefix.slice(1);
	obj.data.placeholder = capitalizedStr + ' ' + obj.data.placeholder;

	obj.data.errorMessage = 'The ' + prefix + ' ' + obj.data.errorMessage.slice(4);
}


export function attachCurrentPrefix(obj) {
	attachPrefix(obj, 'current');
}


export function attachNewPrefix(obj) {
	attachPrefix(obj, 'new', true);
}
