import { Injectable } from '@angular/core';
import { CurrentUserService } from '../user/current-user.service';
import { UserValidationRulesService } from '../user/user-validation-rules.service';
import { PasswordInputService } from './password-input.service';


@Injectable({
	providedIn: 'root'
})
export class CurrentPasswordInputService extends PasswordInputService {

	constructor(
		__currentUser: CurrentUserService,
		__rules: UserValidationRulesService
	) {
		super(__currentUser, __rules);

		this.data.id = 'current-password-input';
		this.data.placeholder = 'Current Password';
		this.data.errorMessage = 'The current ' + this.data.errorMessage.slice(4);
	}

}
