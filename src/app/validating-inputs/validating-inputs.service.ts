import { notEmpty } from '@writetome51/is-empty-not-empty';
import { ValidatingInput } from './validating-input';
import { PublicArrayContainer } from '@writetome51/public-array-container';


export abstract class ValidatingInputsService extends PublicArrayContainer {


	data: ValidatingInput[];


	// To be called during a form event, most likely 'onsubmit'

	areValid(): boolean {
		// alert must be cleared first or this function will never return true:
		// this._alert.clear();

		for (let i = 0; i < this.data.length; ++i) {
			if (notEmpty(this.data[i].error)) return false;
		}
		return true;
	}


}
