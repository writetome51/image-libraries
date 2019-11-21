import { isArray } from '@writetome51/is-array-not-array';
import { getClassModificationDecorator } from '@writetome51/get-class-modification-decorator';
import { ValidatingInputService } from '@writetome51/validating-inputs';


/*****************
Decorator for some ValidatingInputService subclasses.
 Usage:

@PrefixLabel_to_ValidatingInputService({ prefix: string, prefix_propertyToBind?: boolean })
export class TheClass {...}
 *****************/

export const PrefixLabel_to_ValidatingInputService: (
	params: { prefix: string, prefix_propertyToBind?: boolean }
) => Function = getClassModificationDecorator(

	(instance: ValidatingInputService, decoratorArgs: [any]) => {

		let {prefix, prefix_propertyToBind} = decoratorArgs[0];

		instance.data.id = prefix + '-' + instance.data.id;

		if (prefix_propertyToBind) {
			if (instance.data.propertyToBind) {
				instance.data.propertyToBind =
					prefix + instance.data.propertyToBind[0].toUpperCase() +
					instance.data.propertyToBind.slice(1);
			}
			else instance.data.propertyToBind = prefix;
		}

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
