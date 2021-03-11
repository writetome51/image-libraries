import { Bind_ValidatingInputsService_to_Object }
	from './bind-validating-inputs-service-to-object_decorator/bind-validating-inputs-service-to-object.decorator';
import { CurrentUserFormData } from '@runtime-state-data/static-classes/current-user-form.data';
import { ValidatingInputsService } from '@writetome51/validating-inputs';


@Bind_ValidatingInputsService_to_Object(CurrentUserFormData)
export abstract class CurrentUserInputsService extends ValidatingInputsService {}
