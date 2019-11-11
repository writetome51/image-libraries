import { Component } from '@angular/core';
import { AlertService as alert } from '../../services/alert.service';
import { CurrentUserService } from '../../services/user/current-user.service';
import { ClearAlertAndFormOnInitComponent } from '../../clear-alert-and-form-on-init.component';


@Component({
	selector: 'update-user-email',
	template: `<update-user-email-form></update-user-email-form>`
})
export class UpdateUserEmailComponent extends ClearAlertAndFormOnInitComponent {

	constructor(__currentUser: CurrentUserService) {
		super(__currentUser);
	}

}
