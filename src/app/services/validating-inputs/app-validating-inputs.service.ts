import { AlertService as alert } from '../alert.service';
import { ValidatingInputService, ValidatingInputsService } from '@writetome51/validating-inputs';


export class AppValidatingInputsService extends ValidatingInputsService {

	constructor(...inputs: ValidatingInputService[]) {
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
