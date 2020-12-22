import { Injectable } from '@angular/core';
import { PasswordAgainInputService }
	from '@validating-input/password/password-again-input.service';
import { PrefixLabel_to_ValidatingInputService } // tslint:disable-next-line:max-line-length
	from '@validating-input/prefix-label-to-validating-input-service/prefix-label-to-validating-input-service.decorator';


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
