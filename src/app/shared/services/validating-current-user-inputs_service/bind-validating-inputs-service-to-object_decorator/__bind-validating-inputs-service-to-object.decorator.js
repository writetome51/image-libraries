import {ValidatingInputService} from '@writetome51/validating-inputs';
import {getClassModificationDecorator} from '@writetome51/get-class-modification-decorator';


export const __Bind_ValidatingInputsService_to_ObjectDecorator =
	getClassModificationDecorator((inputs, decoratorArgs) => {
		let objectToBind = decoratorArgs[0];

		if (inputs instanceof ValidatingInputService) {
			inputs.data.objectToBind = objectToBind;
			if (inputs.data.propertyToMatch) inputs.data.objectToMatch = objectToBind;
		}
		else { // else it's instanceof ValidatingInputsService
			for (let i = 0, length = inputs.data.length; i < length; ++i) {
				let input = inputs.data[i];
				input.objectToBind = objectToBind;
				if (input.propertyToMatch) input.objectToMatch = objectToBind;
			}
		}
	});
