import { Component, ViewChild } from '@angular/core';
import { AlertService as alert } from '../services/alert.service';
import { DataOperationStatusService as dataOperationStatus }
	from '../services/data-operation-status.service';


@Component({
	selector: 'update-user',
	templateUrl: './update-user.component.html'
})
export class UpdateUserComponent {

	@ViewChild('update_user_form') updateUserForm;

	alert = alert;
	dataOperationStatus = dataOperationStatus;

}
