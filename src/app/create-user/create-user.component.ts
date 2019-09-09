import { Component } from '@angular/core';
import { CurrentUserService } from '../services/current-user.service';
import { UserStorageService } from '../services/user-storage.service';
import { ErrorMessageService } from '../services/error-message.service';
import { NewUserValidatorService } from '../services/new-user-validator.service';
import { isEmpty } from '@writetome51/is-empty-not-empty';


@Component({
	selector: 'create-user',
	templateUrl: './create-user.component.html'
})
export class CreateUserComponent {

	constructor(
		public currentUser: CurrentUserService,
		public error: ErrorMessageService,
		private __userStorage: UserStorageService,
		private __newUserValidator: NewUserValidatorService
	) {
		this.error.message = '';
	}


	create(): void {
		this.__newUserValidator.validate(this.currentUser);

		if (isEmpty(this.error.message)) this.__userStorage.create();
	}

}
