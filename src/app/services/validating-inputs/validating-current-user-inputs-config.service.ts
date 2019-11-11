import { ValidatingInputService } from '../../validating-inputs/validating-input.service';
import { CurrentUserService as currentUser} from '../user/current-user.service';


export abstract class ValidatingCurrentUserInputsConfigService {

	data: ValidatingInputService[];


	constructor(...inputs: ValidatingInputService[]) {
		inputs.forEach((input: ValidatingInputService) => input.data.objectToBind = currentUser);

		this.data = inputs;
	}

}
