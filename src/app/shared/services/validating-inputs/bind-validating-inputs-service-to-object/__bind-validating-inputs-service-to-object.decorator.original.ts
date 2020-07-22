/***************************
// Entire file commented out because it's already transpiled in
// '__bind-validating-inputs-service-to-object.decorator.js'.


import { getClassModificationDecorator } from '@writetome51/get-class-modification-decorator';
import { AppValidatingInputsService } from '../app-validating-inputs.service';
import { ValidatingInput } from '@writetome51/validating-inputs';

//  This module is in separate file in order to avoid angular compile error:
//  'Function calls are not supported in decorators but (functionName) was called in...'

export const __Bind_ValidatingInputsService_to_ObjectDecorator = getClassModificationDecorator(
	(inputs: AppValidatingInputsService, decoratorArgs: [any]) => {

		let obj = decoratorArgs[0];

		for (let i = 0; i < inputs.data.length; ++i) {
			let input: ValidatingInput = inputs.data[i];

			input.objectToBind = obj;
			if (input.propertyToMatch) input.objectToMatch = obj;
		}
	}
);


*******************************/
