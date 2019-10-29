import { AlertService } from './alert.service';


export abstract class InputValidatorService {


	protected _ifTrue_isNotValid: () => boolean;
	protected _inputLabel: string; // examples: 'password', 'email', 'new email'
	protected _requirement: string; // example: 'at least ${num} characters'


	constructor(
		private __alert: AlertService
	) {
	}


	validate(): void {
		if (this._ifTrue_isNotValid()) {
			this.__alert.error = `The ${this._inputLabel} must be ${this._requirement}`;
		}
	}


}
