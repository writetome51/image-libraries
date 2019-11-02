import { Injectable } from '@angular/core';
import { CurrentUserService } from '../user/current-user.service';
import { UserValidationRulesService } from '../user/user-validation-rules.service';
import { PasswordInputService } from './password-input.service';


@Injectable({
	providedIn: 'root'
})
export class NewPasswordInputService extends PasswordInputService {


	constructor(
		__currentUser: CurrentUserService,
		__rules: UserValidationRulesService
	) {
		super(__currentUser, __rules);

		this.data.id = 'new-password-input';
		this.data.propertyToBind = 'newPassword';
		this.data.placeholder = 'New Password';
		this.data.errorMessage = 'The new ' + this.data.errorMessage.slice(4);
	}


}
