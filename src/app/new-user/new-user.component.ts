import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { DataOperationStatusService } from '../services/data-operation-status.service';


@Component({
	selector: 'new-user',
	templateUrl: './new-user.component.html'
})
export class NewUserComponent implements OnInit {

	heading = 'Create Account';


	constructor(
		public alert: AlertService,
		public dataOperationStatus: DataOperationStatusService
	) {
	}


	ngOnInit(): void {
		this.alert.clear();
	}


}
