import { Bind_ValidatingInputsService_to_Object }
	from './bind-validating-inputs-service-to-object/bind-validating-inputs-service-to-object.decorator';
import { CurrentUserData } from '@runtime-state-data/static-classes/current-user.data';
import { ValidatingInputsService } from '@writetome51/validating-inputs';


@Bind_ValidatingInputsService_to_Object(CurrentUserData)
export abstract class CurrentUserInputsService extends ValidatingInputsService {
}
