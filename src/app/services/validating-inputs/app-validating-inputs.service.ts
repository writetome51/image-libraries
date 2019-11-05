import { AlertService } from '../alert.service';
import { ValidatingInputsService } from '../../validating-inputs/validating-inputs.service';
import { ValidatingInputService } from '../../validating-inputs/validating-input.service';
import { InputsValidatorService } from '../../validating-inputs/inputs-validator.service';


export abstract class AppValidatingInputsService extends ValidatingInputsService {


	constructor(
		private __alert: AlertService,
		__inputsValidator: InputsValidatorService,
		...inputs: ValidatingInputService[]
	) {
		super(inputs, __inputsValidator);
	}


	areValid(): boolean {
		if (super.areValid()) return true;
		else {
			this.__alert.error = this.error;
			return false;
		}
	}


}
