import { AlertService as alert } from '../alert.service';
import { ValidatingInputsService } from '../../validating-inputs/framework-independent/validating-inputs.service';
import { ValidatingInputService } from '../../validating-inputs/framework-independent/validating-input.service';
import { Bind_ValidatingInputsService_to_CurrentUserService }
	from './bind-validating-inputs-service-to-current-user-service.decorator';


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
