import { Injectable } from '@angular/core';
import { CurrentUserService } from '../user/current-user.service';
import { PasswordAgainInputService } from './password-again-input.service';


@Injectable({
	providedIn: 'root'
})
export class NewPasswordAgainInputService extends PasswordAgainInputService  {

	constructor(__currentUser: CurrentUserService) {
		super(__currentUser);

		this.data.id = 'new-password-again-input';
		this.data.placeholder = 'New Password Again';
		this.data.propertyToCompare = 'newPassword';
		this.data.errorMessage = 'The two new password inputs must match';
	}

}
