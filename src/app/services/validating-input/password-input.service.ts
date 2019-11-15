import { Injectable } from '@angular/core';
import { UserValidationRulesService as rules } from '../user/user-validation-rules.service';
import { ValidatingPasswordInputService }
	from '../../validating-inputs/validating-password-input.service';
import { Bind_ValidatingInputService_to_CurrentUserService }
	from './bind-validating-input-service-to-current-user-service.decorator';


@Injectable({providedIn: 'root'})
@Bind_ValidatingInputService_to_CurrentUserService()

export class PasswordInputService extends ValidatingPasswordInputService {

	constructor() {
		super();

		this.data.id = 'password-input';
		this.data.propertyToBind = 'password';
		this.data.placeholder = 'Password';
		this.data.isValid = () => (
			this.data.objectToBind[this.data.propertyToBind].length >= rules.passwordMinLength
		);
		this.data.errorMessage = `The password must be at least ${rules.passwordMinLength} characters`;
	}

}
