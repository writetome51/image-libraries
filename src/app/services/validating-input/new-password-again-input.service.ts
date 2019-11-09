import { Injectable } from '@angular/core';
import { CurrentUserService } from '../user/current-user.service';
import { PasswordAgainInputService } from './password-again-input.service';
import { attachNewPrefix } from './attach-prefix.functions';


@Injectable({providedIn: 'root'})

export class NewPasswordAgainInputService extends PasswordAgainInputService {

	constructor(__currentUser: CurrentUserService) {
		super(__currentUser);
		attachNewPrefix(this);

		this.data.propertyToBind = 'passwordAgain';
		this.data.propertyToMatch = 'newPassword';
		this.data.errorMessage = 'The two new password inputs must match';
	}

}
