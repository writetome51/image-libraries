import { AlertService as alert } from '../alert.service';
import { ValidatingInputsService } from '../../validating-inputs/validating-inputs.service';
import { ValidatingInputService } from '../../validating-inputs/validating-input.service';
import { Bind_ValidatingInputService_to_CurrentUserService }
	from '../validating-input/bind-validating-input-service-to-current-user-service.decorator';

@Bind_ValidatingInputService_to_CurrentUserService()

export abstract class AppValidatingInputsService extends ValidatingInputsService {

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
