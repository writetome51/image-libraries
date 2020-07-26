import { Injectable } from '@angular/core';
import { PasswordAgainInputService }
	from '@shared/services/validating-input/password/password-again-input.service';
import { PrefixLabel_to_ValidatingInputService } // tslint:disable-next-line:max-line-length
	from '@services/validating-input/prefix-label-to-validating-input-service/prefix-label-to-validating-input-service.decorator';


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
