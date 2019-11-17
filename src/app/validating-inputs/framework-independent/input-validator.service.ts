import { ValidatingInput } from './validating-input';
import { not } from '@writetome51/not';
import { isArray, notArray } from '@writetome51/is-array-not-array';

// Framework independent

export class InputValidatorService {


	static validate(input: ValidatingInput): void {

		if (isArray(input.isValid)) handleArray(input.isValid);
		else handleFunction(input.isValid);


		function handleArray(isValidFunctions) {
			// @ts-ignore
			for (let i = 0; i < isValidFunctions.length; ++i) {
				let isValid = isValidFunctions[i];

				if (not(isValid())) {
					if (notArray(input.errorMessage)) throw new Error(
						`The 'isValid' property is an array, which means the 'errorMessage' property 
						must also be an array`);
					else {
						input.__error = input.errorMessage[i];
						return;
					}
				}
				else input.__error = ''; // no error.
			}
		}


		function handleFunction(isValid) {
			if (typeof isValid !== 'function') {
				throw new Error(
					`The 'isValid' property must be either a function or an array of functions`);
			}
			else if (not(isValid())) {
				// @ts-ignore
				input.__error = input.errorMessage;
			}
			else input.__error = ''; // no error.
		}

	}


}
