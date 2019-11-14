import { Injectable } from '@angular/core';
import { PasswordAgainInputService } from './password-again-input.service';
import { attach_prefix_ValidatingInputService } from './attach-prefix.decorator';


@attach_prefix_ValidatingInputService('new')

export class __NewPasswordAgainInputService extends PasswordAgainInputService {
}


@Injectable({providedIn: 'root'})

export class NewPasswordAgainInputService extends __NewPasswordAgainInputService {

	constructor() {
		super();

		// This is needed because @attach_prefix_ValidatingInputService prepends
		// 'new' to 'data.propertyToBind':
		this.data.propertyToBind = 'passwordAgain';
		this.data.propertyToMatch = 'newPassword';
		this.data.errorMessage = 'The two new password inputs must match';
	}

}
