import { Component } from '@angular/core';
import { AlertService as alert } from '../services/alert.service';
import { DataOperationStatusService as dataOperationStatus }
	from '../services/data-operation-status.service';


@Component({
	selector: 'update-user',
	templateUrl: './update-user.component.html'
})
export class UpdateUserComponent {

	alert = alert;
	dataOperationStatus = dataOperationStatus;

}
