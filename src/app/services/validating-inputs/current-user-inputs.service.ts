import { Bind_ValidatingInputsService_to_CurrentUserService }
	from './bind-validating-inputs-service-to-current-user-service.decorator';
import { ValidatingInputService } from '@writetome51/validating-inputs';
import { AppValidatingInputsService } from './app-validating-inputs.service';


@Bind_ValidatingInputsService_to_CurrentUserService()

export abstract class CurrentUserInputsService extends AppValidatingInputsService {

	constructor(...inputs: ValidatingInputService[]) {
		super(...inputs);
	}

}
