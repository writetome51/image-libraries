import { notEmpty } from '@writetome51/is-empty-not-empty';
import { ValidatingInput } from './validating-input';
import { PublicArrayContainer } from '@writetome51/public-array-container';
import { ValidatingInputService } from './validating-input.service';


export abstract class ValidatingInputsService extends PublicArrayContainer {


	data: ValidatingInput[];
	error = '';


	constructor(inputs: ValidatingInputService[]) {
		super();

		this.data = inputs.map((input) => input.data);
	}


	// To be called during a form event, most likely 'onsubmit'

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
