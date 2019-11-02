import { AlertService } from './alert.service';
import { ValidatingInputsService } from '../validating-inputs/validating-inputs.service';


export abstract class AppValidatingInputsService extends ValidatingInputsService {


	constructor(private __alert: AlertService) {
		super();
	}


	areValid(): boolean {
		if (super.areValid()) return true;
		else {
			this.__alert.error = this.error;
			return false;
		}
	}


}
