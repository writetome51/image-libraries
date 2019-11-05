import { notEmpty } from '@writetome51/is-empty-not-empty';
import { ValidatingInput } from './validating-input';
import { PublicArrayContainer } from '@writetome51/public-array-container';
import { ValidatingInputService } from './validating-input.service';
import { InputsValidatorService } from './inputs-validator.service';


// Framework independent

export abstract class ValidatingInputsService extends PublicArrayContainer {


	data: ValidatingInput[];
	error = '';


	constructor(
		// `inputs` must be in order you want them to appear in the form

		inputs: ValidatingInputService[],
		private __inputsValidator: InputsValidatorService
	) {
		super();

		this.data = inputs.map((input) => input.data);
		this.__inputsValidator.inputs = this.data;
	}


	// To be called just before submitting data to server

	areValid(): boolean {
		this.error = '';

		for (let i = 0; i < this.data.length; ++i) {
			this.__inputsValidator.validate(i);

			if (notEmpty(this.data[i].error)) {
				this.error = this.data[i].error;
				return false;
			}
		}
		return true;
	}


}
