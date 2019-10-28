import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { DataOperationStatusService } from '../services/data-operation-status.service';


@Component({
	selector: 'create-user',
	templateUrl: './create-user.component.html'
})
export class CreateUserComponent implements OnInit {

	heading = 'Create Account';


	constructor(
		public alert: AlertService,
		public dataOperationBegun: DataOperationStatusService
	) {
	}


	ngOnInit(): void {
		this.alert.clear();
	}


}
