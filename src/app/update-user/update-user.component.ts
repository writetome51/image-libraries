import { Component } from '@angular/core';
import { AlertService as alert } from '../services/alert.service';
import { DataOperationStatusService as dataOperationStatus }
	from '../services/data-operation-status.service';
import { Router } from '@angular/router';


@Component({
	selector: 'update-user',
	templateUrl: './update-user.component.html'
})
export class UpdateUserComponent {

	alert = alert;
	dataOperationStatus = dataOperationStatus;
	heading = 'Update Account';


	get formHeading() {
		let r = this.router.routerState.snapshot.url;
		if (r.includes('email')) return 'Update Email';
		if (r.includes('password')) return 'Update Password';
		if (r.includes('delete')) return 'Self Destruct?';
	}


	constructor(public router: Router) {
	}

}
