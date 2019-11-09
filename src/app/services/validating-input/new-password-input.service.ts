import { Injectable } from '@angular/core';
import { CurrentUserService } from '../user/current-user.service';
import { PasswordInputService } from './password-input.service';
import { attachNewPrefix } from './attach-prefix.functions';


@Injectable({providedIn: 'root'})

export class NewPasswordInputService extends PasswordInputService {

	constructor(__currentUser: CurrentUserService) {
		super(__currentUser);
		attachNewPrefix(this);
	}

}
