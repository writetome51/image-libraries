import { Injectable } from '@angular/core';
import { CurrentUserService } from '../user/current-user.service';
import { UserValidationRulesService } from '../user/user-validation-rules.service';
import { ValidatingInputService } from '../../validating-inputs/validating-input.service';


@Injectable({
	providedIn: 'root'
})
export class EmailInputService extends ValidatingInputService {


	constructor(
		private __currentUser: CurrentUserService,
		private __rules: UserValidationRulesService
	) {
		super();

		this.data.type = 'text';
		this.data.id = 'email-input';
		this.data.objectToBind = this.__currentUser;
		this.data.propertyToBind = 'email';
		this.data.placeholder = 'Email';
		this.data.isValid = () => (
			this.data.objectToBind[this.data.propertyToBind].length >= this.__rules.emailMinLength
		);
		this.data.errorMessage = `The email must be at least ${this.__rules.emailMinLength} characters`;
	}


}
