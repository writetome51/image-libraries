import { Bind_ValidatingInputsService_to_Object }
	from './bind-validating-inputs-service-to-object_decorator/bind-validating-inputs-service-to-object.decorator';
import { CurrentUserFormInputsData }
	from '@runtime-state-data/static-classes/current-user-form-inputs.data';
import { ValidatingInputsService } from '@writetome51/validating-inputs';


@Bind_ValidatingInputsService_to_Object(CurrentUserFormInputsData)
export abstract class ValidatingCurrentUserInputsService extends ValidatingInputsService {}
