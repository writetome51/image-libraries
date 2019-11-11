import { Component } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { DataOperationStatusService } from '../services/data-operation-status.service';


@Component({
	selector: 'update-user',
	templateUrl: './update-user.component.html'
})
export class UpdateUserComponent {

	constructor(
		public alert: AlertService,
		public dataOperationStatus: DataOperationStatusService
	) {
	}

}
