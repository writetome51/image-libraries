import { Injectable } from '@angular/core';
import { PasswordAgainInputService } from './password-again-input.service';
import { attach_prefix_ValidatingInputService } from './attach-prefix-validating-input-service.decorator';


@attach_prefix_ValidatingInputService({prefix: 'new', propertyToBind: 'passwordAgain'})

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
