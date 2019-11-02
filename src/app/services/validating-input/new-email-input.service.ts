import { Injectable } from '@angular/core';
import { CurrentUserService } from '../user/current-user.service';
import { UserValidationRulesService } from '../user/user-validation-rules.service';
import { EmailInputService } from './email-input.service';


@Injectable({
	providedIn: 'root'
})
export class NewEmailInputService extends EmailInputService {


	constructor(
		__currentUser: CurrentUserService,
		__rules: UserValidationRulesService
	) {
		super(__currentUser, __rules);

		this.data.id = 'new-email-input';
		this.data.placeholder = 'New Email';
		this.data.propertyToBind = 'newEmail';
		this.data.errorMessage = 'The new ' + this.data.errorMessage.slice(4);
	}


}
