import { Component, OnInit } from '@angular/core';
import { ClearAlertAndFormOnInitComponent } from '../../clear-alert-and-form-on-init.component';
import { AlertService as alert } from '../../services/alert.service';
import { CurrentUserService } from '../../services/user/current-user.service';


@Component({
	selector: 'update-user-password',
	template: `<update-user-password-form></update-user-password-form>`
})
export class UpdateUserPasswordComponent extends ClearAlertAndFormOnInitComponent {

	constructor(__currentUser: CurrentUserService) {
		super(__currentUser);
	}

}
