import { AlertService } from '../alert.service';


export abstract class InputValidatorService {


	errorMessage = '';
	protected _ifTrue_isNotValid: () => boolean;


	constructor(
		private __alert: AlertService
	) {
	}


	validate(): void {
		if (this._ifTrue_isNotValid()) {
			this.__alert.error = this.errorMessage;
		}
	}


}
