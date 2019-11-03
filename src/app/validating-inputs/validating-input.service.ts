import { ValidatingInput } from './validating-input';


export abstract class ValidatingInputService {

	data: ValidatingInput;


	constructor() {

		// Defaults:

		this.data = {
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
			prompt: undefined,
			minLength: undefined
		};

	}

}
