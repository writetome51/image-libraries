import { Component } from '@angular/core';
import { AlertService as alert } from '../services/alert.service';
import { DataOperationStatusService } from '../services/data-operation-status.service';
import { ClearAlertAndFormOnInitComponent } from '../clear-alert-and-form-on-init.component';
import { CurrentUserService } from '../services/user/current-user.service';


@Component({
	selector: 'new-user',
	templateUrl: './new-user.component.html'
})
export class NewUserComponent extends ClearAlertAndFormOnInitComponent {

	alert = alert;
	heading = 'Create Account';


	constructor(
		public dataOperationStatus: DataOperationStatusService,
		__currentUser: CurrentUserService
	) {
		super(__currentUser);
	}


}
