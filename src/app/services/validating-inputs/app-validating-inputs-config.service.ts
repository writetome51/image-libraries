import { ValidatingInputService } from '../../validating-inputs/validating-input.service';
import { CurrentUserService } from '../user/current-user.service';


export abstract class AppValidatingInputsConfigService {

	data: ValidatingInputService[];


	constructor(
		currentUser: CurrentUserService,
		...inputs: ValidatingInputService[]
	) {
		inputs.forEach((input: ValidatingInputService) => input.data.objectToBind = currentUser);

		this.data = inputs;
	}
}
