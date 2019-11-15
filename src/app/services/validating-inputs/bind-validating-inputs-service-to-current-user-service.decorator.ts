import { getClassModificationDecorator } from '@writetome51/get-class-modification-decorator';
import { CurrentUserService as currentUser } from '../user/current-user.service';
import { AppValidatingInputsService } from './app-validating-inputs.service';


/*****************
Decorator for some ValidatingInputService subclasses.
 Usage:

@Bind_ValidatingInputsService_to_CurrentUserService()
export class TheClass {...}
 *****************/

export const Bind_ValidatingInputsService_to_CurrentUserService = getClassModificationDecorator(
	(inputs: AppValidatingInputsService) => {

		for (let i = 0; i < inputs.data.length; ++i) {
			//let input: ValidatingInput = inputs.data[i];

			inputs.data[i].objectToBind = currentUser;
			// @ts-ignore
			if (inputs.data[i].propertyToMatch) inputs.data[i].objectToMatch = currentUser;
		}
	}
);
