import { Component } from '@angular/core';
import { ClearAlertAndFormOnInitComponent } from '../../clear-alert-and-form-on-init.component';
import { AlertService } from '../../services/alert.service';
import { CurrentUserService } from '../../services/user/current-user.service';


@Component({
	selector: 'delete-user',
	template: `<delete-user-form></delete-user-form>`
})
export class DeleteUserComponent extends ClearAlertAndFormOnInitComponent {

	constructor(
		__alert: AlertService,
		__currentUser: CurrentUserService
	) {
		super(__alert, __currentUser);
	}

}
