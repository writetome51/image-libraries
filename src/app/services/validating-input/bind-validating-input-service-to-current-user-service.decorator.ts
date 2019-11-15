import { ValidatingInputService } from '../../validating-inputs/validating-input.service';
import { getClassModificationDecorator } from '@writetome51/get-class-modification-decorator';
import { CurrentUserService as currentUser } from '../user/current-user.service';


/*****************
Decorator for some ValidatingInputService subclasses.
 Usage:

@Bind_ValidatingInputService_to_CurrentUserService()
export class TheClass {...}
 *****************/

export const Bind_ValidatingInputService_to_CurrentUserService = getClassModificationDecorator(
	(instance: ValidatingInputService) => {
		instance.data.objectToBind = currentUser;
	}
);
