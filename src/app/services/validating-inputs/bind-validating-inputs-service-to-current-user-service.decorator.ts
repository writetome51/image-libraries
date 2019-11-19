import { getClassModificationDecorator } from '@writetome51/get-class-modification-decorator';
import { AppValidatingInputsService } from './app-validating-inputs.service';
import { ValidatingInput } from '@writetome51/validating-inputs';


/*****************
Decorator for some ValidatingInputsService subclasses.
 Usage:

@Bind_ValidatingInputsService_to_Object(obj)
export class TheClass {...}
 *****************/

export const Bind_ValidatingInputsService_to_Object: (obj) => Function = getClassModificationDecorator(
	(inputs: AppValidatingInputsService, decoratorArgs: [any]) => {

		let obj = decoratorArgs[0];

		for (let i = 0; i < inputs.data.length; ++i) {
			let input: ValidatingInput = inputs.data[i];

			input.objectToBind = obj;
			if (input.propertyToMatch) input.objectToMatch = obj;
		}
	}
);
