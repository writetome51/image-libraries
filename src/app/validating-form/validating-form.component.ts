import { Component, Input } from '@angular/core';
import { notEmpty } from '@writetome51/is-empty-not-empty';
import { ValidatingInput } from '../../interfaces/validating-input';


@Component({
	selector: 'validating-form',
	templateUrl: './validating-form.component.html'
})
export class ValidatingFormComponent {


	@Input() inputs: ValidatingInput[];


	constructor() {
	}


	isValid(): boolean {
		// alert must be cleared first or this function will never return true:
		// this._alert.clear();

		for (let i = 0; i < this.inputs.length; ++i) {
			if (notEmpty(this.inputs[i].error)) return false;
		}
		return true;
	}


}
