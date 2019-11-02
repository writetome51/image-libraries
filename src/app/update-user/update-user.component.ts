import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { DataOperationStatusService } from '../services/data-operation-status.service';
import { CurrentUserService } from '../services/user/current-user.service';


@Component({
	selector: 'update-user',
	templateUrl: './update-user.component.html'
})
export class UpdateUserComponent implements OnInit {


	constructor(
		public alert: AlertService,
		public dataOperationBegun: DataOperationStatusService,
		private __currentUser: CurrentUserService
	) {
	}


	ngOnInit(): void {
		this.__currentUser.clearFormProperties();
	}


}
