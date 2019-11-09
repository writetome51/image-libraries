import { Injectable } from '@angular/core';
import { EmailInputService } from './email-input.service';
import { CurrentUserService } from '../user/current-user.service';
import { UserValidationRulesService } from '../user/user-validation-rules.service';
import { attachNewPrefix } from './attach-prefix.functions';


@Injectable({providedIn: 'root'})

export class NewEmailInputService extends EmailInputService {

	constructor(
		__currentUser: CurrentUserService,
		__rules: UserValidationRulesService
	) {
		super(__currentUser, __rules);
		attachNewPrefix(this);
	}

}
