import { Injectable } from '@angular/core';
import { attachNewPrefix } from './attach-prefix.functions';
import { PasswordAgainInputService } from './password-again-input.service';


@Injectable({providedIn: 'root'})

export class NewPasswordAgainInputService extends PasswordAgainInputService {

	constructor() {
		super();
		attachNewPrefix(this);

		// This is needed because attachNewPrefix() prepends 'new' to 'propertyToBind'
		this.data.propertyToBind = 'passwordAgain';
		this.data.propertyToMatch = 'newPassword';
		this.data.errorMessage = 'The two new password inputs must match';
	}

}
