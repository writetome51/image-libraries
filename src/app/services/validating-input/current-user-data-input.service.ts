import { CurrentUserService } from '../user/current-user.service';
import { ValidatingInputService } from '../../validating-inputs/validating-input.service';


export abstract class CurrentUserDataInputService extends ValidatingInputService {

	constructor(private __currentUser: CurrentUserService) {
		super();
		this.data.objectToBind = this.__currentUser;
	}

}
