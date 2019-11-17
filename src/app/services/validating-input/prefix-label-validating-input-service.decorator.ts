import { ValidatingInputService } from '../../validating-inputs/framework-independent/validating-input.service';
import { isArray } from '@writetome51/is-array-not-array';
import { getClassModificationDecorator } from '@writetome51/get-class-modification-decorator';


/*****************
Decorator for some ValidatingInputService subclasses.
 Usage:

@PrefixLabel_ValidatingInputService({ prefix: string, propertyToBind?: string })
export class TheClass {...}
 *****************/

export const PrefixLabel_ValidatingInputService: (
	params: { prefix: string, propertyToBind?: string }
) => Function = getClassModificationDecorator(

	(instance: ValidatingInputService, decoratorArgs: [any]) => {

		let {prefix, propertyToBind} = decoratorArgs[0];

		instance.data.id = prefix + '-' + instance.data.id;
		if (propertyToBind && propertyToBind.length) instance.data.propertyToBind = propertyToBind;

		let capitalizedStr = prefix[0].toUpperCase() + prefix.slice(1);
		instance.data.label = capitalizedStr + ' ' + instance.data.label;

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
