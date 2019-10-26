import { CurrentUserService } from '../../user/current-user.service';
import { Injectable } from '@angular/core';
import { isEmpty } from '@writetome51/is-empty-not-empty';
import { AlertService } from '../../alert.service';
import { UserValidationRulesService } from '../../user/user-validation-rules.service';


@Injectable({
	providedIn: 'root'
})
export class LoginFormValidatorService {


	constructor(
		private __alert: AlertService,
		private __currentUser: CurrentUserService,
		private __userValidationRules: UserValidationRulesService
	) {
	}


	isValid(): boolean {
		// alert must be cleared first or this function will never return true:
		this.__alert.clear();
		let emailMinLength = this.__userValidationRules.emailMinLength;
		let pwordMinLength = this.__userValidationRules.passwordMinLength;

		if (this.__currentUser.email.length < emailMinLength) {
			this.__alert.error = `The email must be at least ${emailMinLength} characters.`;
		}
		else if (this.__currentUser.password.length < pwordMinLength) {
			this.__alert.error = `The password must be at least ${pwordMinLength} characters.`;
		}

		return isEmpty(this.__alert.error);
	}


}
