import { Injectable } from '@angular/core';
import { CurrentUserService } from '../user/current-user.service';
import { UserValidationRulesService } from '../user/user-validation-rules.service';
import { ValidatingInputService } from '../../validating-inputs/validating-input.service';


@Injectable({
	providedIn: 'root'
})
export class PasswordInputService extends ValidatingInputService {


	constructor(
		private __currentUser: CurrentUserService,
		private __rules: UserValidationRulesService
	) {
		super();

		this.data.type = 'password';
		this.data.id = 'password-input';
		this.data.objectToBind = this.__currentUser;
		this.data.propertyToBind = 'password';
		this.data.placeholder = 'Password';
		this.data.isValid = () => (
			this.data.objectToBind[this.data.propertyToBind].length >= this.__rules.passwordMinLength
		);
		this.data.errorMessage =
			`The password must be at least ${this.__rules.passwordMinLength} characters`;
	}


}
