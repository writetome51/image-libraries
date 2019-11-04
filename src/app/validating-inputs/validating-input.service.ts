import { ValidatingInput } from './validating-input';


export abstract class ValidatingInputService {

	// defaults:

	data: ValidatingInput = {
		type: undefined,
		id: undefined,
		objectToBind: undefined,
		propertyToBind: undefined,
		placeholder: undefined,
		hideLabel: true,
		required: true,
		isValid: undefined,
		errorMessage: undefined,
		error: '',
		prompt: undefined
	};

}
