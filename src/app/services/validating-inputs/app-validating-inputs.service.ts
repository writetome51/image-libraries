import { AlertService as alert } from '../alert.service';
import { ValidatingInputsService } from '@writetome51/validating-inputs';


export abstract class AppValidatingInputsService extends ValidatingInputsService {

	areValid(): boolean {
		if (super.areValid()) return true;
		else {
			alert.error = this.error;
			return false;
		}
	}

}
