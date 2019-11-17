import { InputValidatorService } from './input-validator.service';
import { notEmpty } from '@writetome51/is-empty-not-empty';
import { PublicArrayContainer } from '@writetome51/public-array-container';
import { ValidatingInput } from './validating-input';
import { ValidatingInputService } from './validating-input.service';


// Framework independent

export abstract class ValidatingInputsService extends PublicArrayContainer {


	data: ValidatingInput[];
	error = '';


	constructor(
		// `inputs` must be in the order you want them to appear in the form

		inputs: ValidatingInputService[]
	) {
		super();

		this.data = inputs.map((input) => input.data);
	}


	// To be called just before submitting data to server

	areValid(): boolean {
		this.error = '';

		for (let i = 0; i < this.data.length; ++i) {
			InputValidatorService.validate(this.data[i]);

			if (notEmpty(this.data[i].__error)) {
				this.error = this.data[i].__error;
				return false;
			}
		}
		return true;
	}


}
