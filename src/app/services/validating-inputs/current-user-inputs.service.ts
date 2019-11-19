import { Bind_ValidatingInputsService_to_Object }
	from './bind-validating-inputs-service-to-current-user-service.decorator';
import { AppValidatingInputsService } from './app-validating-inputs.service';
import { CurrentUserService } from '../user/current-user.service';


@Bind_ValidatingInputsService_to_Object(CurrentUserService)

export abstract class CurrentUserInputsService extends AppValidatingInputsService {
}
