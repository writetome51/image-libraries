import { notEmpty } from '@writetome51/is-empty-not-empty';
import { AlertService } from './alert.service';
import { InputValidatorService } from './input-validator.service';


export abstract class FormValidatorService {


	protected _inputValidators: InputValidatorService[];


	constructor(
		protected _alert: AlertService
	) {
	}


	isValid(): boolean {
		// alert must be cleared first or this function will never return true:
		this._alert.clear();

		for (let i = 0; i < this._inputValidators.length; ++i) {
			this._inputValidators[i].validate();
			if (notEmpty(this._alert.error)) return false;
		}
		return true;
	}


}
