import { Injectable } from '@angular/core';
import { CurrentUserService } from '../user/current-user.service';
import { CurrentUserDataInputService } from './current-user-data-input.service';
import { UserValidationRulesService } from '../user/user-validation-rules.service';


@Injectable({
	providedIn: 'root'
})
export class EmailInputService extends CurrentUserDataInputService {


	constructor(
		__currentUser: CurrentUserService,
		private __rules: UserValidationRulesService
	) {
		super(__currentUser);

		this.data.type = 'text';
		this.data.id = 'email-input';
		this.data.propertyToBind = 'email';
		this.data.placeholder = 'Email';
		this.data.isValid = () => (
			this.data.objectToBind[this.data.propertyToBind].length >= this.__rules.emailMinLength
		);
		this.data.errorMessage = `The email must be at least ${this.__rules.emailMinLength} characters`;
	}


}
