import { AlertService as alert } from '../alert.service';
import { Bind_ValidatingInputsService_to_CurrentUserService }
	from './bind-validating-inputs-service-to-current-user-service.decorator';
import { ValidatingInputService, ValidatingInputsService } from '@writetome51/validating-inputs';


@Bind_ValidatingInputsService_to_CurrentUserService()

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
