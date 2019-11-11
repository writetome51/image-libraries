import { AlertService as alert } from '../alert.service';
import { ValidatingInputsService } from '../../validating-inputs/validating-inputs.service';
import { ValidatingInputService } from '../../validating-inputs/validating-input.service';


export abstract class AppValidatingInputsService extends ValidatingInputsService {

	constructor(
		...inputs: ValidatingInputService[]
	) {
		super(inputs);
	}


	areValid(): boolean {
		if (super.areValid()) return true;
		else {
			alert.error = this.error;
			return false;
		}
	}

}
