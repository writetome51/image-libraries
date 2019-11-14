import { ValidatingInputService } from '../../validating-inputs/validating-input.service';
import { isArray } from '@writetome51/is-array-not-array';
import { getClassModificationDecorator } from '@writetome51/get-class-modification-decorator';


/*****************
Decorator for some ValidatingInputService subclasses.
 Usage:

@attach_prefix_ValidatingInputService('string')
export class TheClass {...}
 *****************/

export const attach_prefix_ValidatingInputService: (
	params: { prefix: string, propertyToBind: string }
) => Function = getClassModificationDecorator(

	(instance: ValidatingInputService, decoratorArgs: [any]) => {

		let {prefix, propertyToBind} = decoratorArgs[0];

		instance.data.id = prefix + '-' + instance.data.id;
		instance.data.propertyToBind = propertyToBind;

		let capitalizedStr = prefix[0].toUpperCase() + prefix.slice(1);
		instance.data.placeholder = capitalizedStr + ' ' + instance.data.placeholder;

		if (isArray(instance.data.errorMessage)) {
			// @ts-ignore
			for (let i = 0; i < instance.data.errorMessage.length; ++i) {
				let message = instance.data.errorMessage[i];
				// @ts-ignore
				instance.data.errorMessage[i] = `The ${prefix} ${message.slice(4)}`;
			}
		}
		else instance.data.errorMessage = `The ${prefix} ${instance.data.errorMessage.slice(4)}`;
	}
);
