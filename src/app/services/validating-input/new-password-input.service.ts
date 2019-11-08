import { Injectable } from '@angular/core';
import { CurrentUserService } from '../user/current-user.service';
import { UserValidationRulesService } from '../user/user-validation-rules.service';
import { PasswordInputService } from './password-input.service';
import { attachNewPrefix } from './attach-prefix.function';


@Injectable({providedIn: 'root'})

export class NewPasswordInputService extends PasswordInputService {

	constructor(
		__currentUser: CurrentUserService,
		__rules: UserValidationRulesService
	) {
		super(__currentUser, __rules);
		attachNewPrefix(this);
	}

}
