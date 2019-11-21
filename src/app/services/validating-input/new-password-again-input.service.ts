import { Injectable } from '@angular/core';
import { PasswordAgainInputService } from './password-again-input.service';
import { PrefixLabel_to_ValidatingInputService } from './prefix-label-to-validating-input-service.decorator';


@PrefixLabel_to_ValidatingInputService({prefix: 'new'})

export class __NewPasswordAgainInputService extends PasswordAgainInputService {
}


@Injectable({providedIn: 'root'})

export class NewPasswordAgainInputService extends __NewPasswordAgainInputService {

	constructor() {
		super();

		this.data.propertyToMatch = 'newPassword';
		this.data.errorMessage = 'The two new password inputs must match';
	}

}
