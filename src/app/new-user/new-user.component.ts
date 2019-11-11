import { Component } from '@angular/core';
import { AlertService as alert } from '../services/alert.service';
import { DataOperationStatusService as dataOperationStatus}
	from '../services/data-operation-status.service';
import { ClearAlertAndFormOnInitComponent } from '../clear-alert-and-form-on-init.component';
import { CurrentUserService } from '../services/user/current-user.service';


@Component({
	selector: 'new-user',
	templateUrl: './new-user.component.html'
})
export class NewUserComponent extends ClearAlertAndFormOnInitComponent {

	heading = 'Create Account';
	alert = alert;
	dataOperationStatus = dataOperationStatus;


	constructor(__currentUser: CurrentUserService) {
		super(__currentUser);
	}


}
