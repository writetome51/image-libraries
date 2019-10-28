import { Component } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { DataOperationStatusService } from '../services/data-operation-status.service';


@Component({
	selector: 'edit-user',
	templateUrl: './edit-user.component.html'
})
export class EditUserComponent {


	constructor(
		public alert: AlertService,
		public dataOperationBegun: DataOperationStatusService
	) {
	}


}
