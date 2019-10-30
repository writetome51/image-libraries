import { AlertService } from '../services/alert.service';
import { Component, Input } from '@angular/core';
import { InputValidatorService } from '../services/input-validator/input-validator.service';
import { notEmpty } from '@writetome51/is-empty-not-empty';
import { ValidatingInput } from '../../interfaces/validating-input';


@Component({
	selector: 'validating-form',
	templateUrl: './validating-form.component.html'
})
export class ValidatingFormComponent {

	@Input() inputs: ValidatingInput[];
	protected _inputValidators: InputValidatorService[];


	constructor(protected _alert: AlertService) {
	}


	isValid(): boolean {
		// alert must be cleared first or this function will never return true:
		this._alert.clear();

		for (let i = 0; i < this.inputs.length; ++i) {
			this._alert.error = this.inputs[i].error;
			if (notEmpty(this._alert.error)) return false;
		}
		return true;
	}


}
