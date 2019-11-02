import { Injectable } from '@angular/core';
import { CurrentUserService } from '../user/current-user.service';
import { UserValidationRulesService } from '../user/user-validation-rules.service';
import { EmailInputService } from './email-input.service';


@Injectable({
	providedIn: 'root'
})
export class CurrentEmailInputService extends EmailInputService {


	constructor(
		__currentUser: CurrentUserService,
		__rules: UserValidationRulesService
	) {
		super(__currentUser, __rules);

		this.data.id = 'current-email-input';
		this.data.placeholder = 'Current Email';
		this.data.errorMessage = 'The current ' + this.data.errorMessage.slice(4);
	}


}
