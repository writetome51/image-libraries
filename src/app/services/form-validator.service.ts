import { isEmpty } from '@writetome51/is-empty-not-empty';
import { AlertService } from './alert.service';


export abstract class FormValidatorService {


	constructor(
		protected _alert: AlertService
	) {
	}


	isValid(): boolean {
		// alert must be cleared first or this function will never return true:
		this._alert.clear();

		this._uniqueCode();

		return isEmpty(this._alert.error);
	}


	protected _uniqueCode(): void {
	}


}
