import { ValidatingInputService } from '../../validating-inputs/validating-input.service';
import { isArray } from '@writetome51/is-array-not-array';
import { getClassModificationDecorator } from '@writetome51/get-class-modification-decorator';


/*****************
Decorator for some ValidatingInputService subclasses.
 Usage:

@attach_prefix_ValidatingInputService('string')
export class TheClass {...}
 *****************/

export const attach_prefix_ValidatingInputService: (prefix: string) => Function =
	getClassModificationDecorator(
		(instance: ValidatingInputService, decoratorArgs: [string]) => {

			let str = decoratorArgs[0].toLowerCase().trim();

			instance.data.id = str + '-' + instance.data.id;

			instance.data.propertyToBind = str + instance.data.placeholder;

			let capitalizedStr = str[0].toUpperCase() + str.slice(1);
			instance.data.placeholder = capitalizedStr + ' ' + instance.data.placeholder;

			if (isArray(instance.data.errorMessage)) {
				// @ts-ignore
				for (let i = 0; i < instance.data.errorMessage.length; ++i) {
					let message = instance.data.errorMessage[i];
					// @ts-ignore
					instance.data.errorMessage[i] = `The ${str} ${message.slice(4)}`;
				}
			}
			else instance.data.errorMessage = `The ${str} ${instance.data.errorMessage.slice(4)}`;
		}
	);
