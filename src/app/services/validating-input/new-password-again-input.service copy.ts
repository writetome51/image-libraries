import { Injectable } from '@angular/core';
import { attachNewPrefix } from './attach-prefix.functions';
import { PasswordAgainInputServiceCopy } from './password-again-input.service copy';


@Injectable({providedIn: 'root'})

export class NewPasswordAgainInputServiceCopy extends PasswordAgainInputServiceCopy {

	constructor() {
		super();
		attachNewPrefix(this);

		// This is needed because attachNewPrefix() prepends 'new' to 'propertyToBind'
		this.data.propertyToBind = 'passwordAgain';
		this.data.propertyToMatch = 'newPassword';
		this.data.errorMessage = 'The two new password inputs must match';
	}

}
