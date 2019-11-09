import { CurrentUserService } from '../user/current-user.service';
import { getDefaultInput } from './get-input.functions';
import { ValidatingInput } from '../../validating-inputs/validating-input';
import { ValidatingInputService } from '../../validating-inputs/validating-input.service';


export abstract class CurrentUserDataInputServiceCopy implements ValidatingInputService {

	data: ValidatingInput;


	constructor(private __currentUser: CurrentUserService) {
		this.data = getDefaultInput();
		this.data.objectToBind = this.__currentUser;
	}

}
