import { AlertService } from '../alert.service';
import { CurrentUserService } from '../user/current-user.service';
import { Injectable } from '@angular/core';
import { isEmpty } from '@writetome51/is-empty-not-empty';
import { UserValidationRulesService } from '../user-validation-rules.service';


@Injectable({
	providedIn: 'root'
})
export class EmailUpdateValidatorService {

	constructor(
		private __alert: AlertService,
		private __currentUser: CurrentUserService,
		private __userValidationRules: UserValidationRulesService
	) {
	}


	isValid(): boolean {
		let min = this.__userValidationRules.emailMinLength;

		if (this.__currentUser.email.length < min) {
			this.__alert.error = `The current email must be at least ${min} characters.`;
		}
		else if (this.__currentUser.newEmail.length < min) {
			this.__alert.error = `The new email must be at least ${min} characters.`;
		}

		return isEmpty(this.__alert.error);
	}


}
