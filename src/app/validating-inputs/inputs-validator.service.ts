import { ValidatingInput } from './validating-input';
import { not } from '@writetome51/not';


export class InputsValidatorService {

	static validate(input: ValidatingInput): void {
		if (not(input.isValid())) {
			input.error = input.errorMessage;
		}
		else input.error = '';
	}

}
