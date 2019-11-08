import { Injectable } from '@angular/core';
import { CurrentUserService } from '../user/current-user.service';
import { UserValidationRulesService } from '../user/user-validation-rules.service';
import { EmailInputService } from './email-input.service';
import { attachCurrentPrefix } from '../../attach-prefix.decorator';


@Injectable({
	providedIn: 'root'
})
export class CurrentEmailInputService extends EmailInputService {

	constructor(
		__currentUser: CurrentUserService,
		__rules: UserValidationRulesService
	) {
		super(__currentUser, __rules);
		attachCurrentPrefix(this);
	}

}
