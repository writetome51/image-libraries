import { notEmpty } from '@writetome51/is-empty-not-empty';
import { ValidatingInput } from '../../../interfaces/validating-input';


export abstract class ValidatingInputsService {


	inputs: ValidatingInput[];


	constructor() {
	}


	areValid(): boolean {
		// alert must be cleared first or this function will never return true:
		// this._alert.clear();

		for (let i = 0; i < this.inputs.length; ++i) {
			if (notEmpty(this.inputs[i].error)) return false;
		}
		return true;
	}


}
