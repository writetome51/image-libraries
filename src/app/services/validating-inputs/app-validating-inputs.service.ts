import { AlertData as alert }
	from '../../../data-structures/runtime-state-data/static-classes/alert.data';
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
