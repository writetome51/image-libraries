import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../services/user/current-user.service';
import { UserStorageService } from '../../services/user/user-storage.service';
import { SuccessOrErrorMessageService } from '../../services/success-or-error-message.service';


@Component({
	selector: 'update-user-password',
	templateUrl: './update-user-password.component.html'
})
export class UpdateUserPasswordComponent implements OnInit {

	newPasswordAgain = '';


	constructor(
		public currentUser: CurrentUserService,
		private __userStorage: UserStorageService,
		private __successOrErrorMessage: SuccessOrErrorMessageService
	) {
	}


	ngOnInit(): void {
		this.currentUser.clearFormProperties();
	}


	save(): void {
		if (this.currentUser.newPassword === this.newPasswordAgain) {
			let result = this.__userStorage.updatePassword();
		}
		else this.__successOrErrorMessage.error = 'The two password inputs must match.';

	}


}
