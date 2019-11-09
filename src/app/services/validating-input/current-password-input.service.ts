import { Injectable } from '@angular/core';
import { CurrentUserService } from '../user/current-user.service';
import { PasswordInputService } from './password-input.service';
import { attachCurrentPrefix } from './attach-prefix.functions';


@Injectable({providedIn: 'root'})

export class CurrentPasswordInputService extends PasswordInputService {

	constructor(__currentUser: CurrentUserService) {
		super(__currentUser);
		attachCurrentPrefix(this);
	}

}
