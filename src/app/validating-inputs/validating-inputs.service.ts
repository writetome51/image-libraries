import { notEmpty } from '@writetome51/is-empty-not-empty';
import { ValidatingInput } from './validating-input';
import { PublicArrayContainer } from '@writetome51/public-array-container';
import { ValidatingInputService } from './validating-input.service';


// Framework independent

export abstract class ValidatingInputsService extends PublicArrayContainer {


	data: ValidatingInput[];
	error = '';


	// `inputs` must be in order you want them to appear in the form

	constructor(inputs: ValidatingInputService[]) {
		super();

		this.data = inputs.map((input) => input.data);
	}


	// To be called just before submitting data to server

	areValid(): boolean {
		this.error = '';

		for (let i = 0; i < this.data.length; ++i) {
			if (notEmpty(this.data[i].error)) {
				this.error = this.data[i].error;
				return false;
			}
		}
		return true;
	}


}
