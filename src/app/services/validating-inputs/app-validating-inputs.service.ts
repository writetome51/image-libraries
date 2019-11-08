import { AlertService } from '../alert.service';
import { ValidatingInputsService } from '../../validating-inputs/validating-inputs.service';
import { ValidatingInputService } from '../../validating-inputs/validating-input.service';


export abstract class AppValidatingInputsService extends ValidatingInputsService {


	constructor(
		private __alert: AlertService,
		...inputs: ValidatingInputService[]
	) {
		super(inputs);
	}


	areValid(): boolean {
		if (super.areValid()) return true;
		else {
			this.__alert.error = this.error;
			return false;
		}
	}


}
