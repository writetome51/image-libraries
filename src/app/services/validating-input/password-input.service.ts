import { Injectable } from '@angular/core';
import { CurrentUserService } from '../user/current-user.service';
import { UserValidationRulesService as rules } from '../user/user-validation-rules.service';
import { CurrentUserDataInputService } from './current-user-data-input.service';


@Injectable({providedIn: 'root'})

export class PasswordInputService extends CurrentUserDataInputService {


	constructor(__currentUser: CurrentUserService) {
		super(__currentUser);

		this.data.type = 'password';
		this.data.id = 'password-input';
		this.data.propertyToBind = 'password';
		this.data.placeholder = 'Password';
		this.data.isValid = () => (
			this.data.objectToBind[this.data.propertyToBind].length >= rules.passwordMinLength
		);
		this.data.errorMessage =
			`The password must be at least ${rules.passwordMinLength} characters`;
	}


}
