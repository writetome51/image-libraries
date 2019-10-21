import { Component } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { DataOperationBegunService } from '../services/data-operation-begun.service';


@Component({
	selector: 'create-user',
	templateUrl: './create-user.component.html'
})
export class CreateUserComponent {

	heading = 'Create Account';


	constructor(
		public alert: AlertService,
		public dataOperationBegun: DataOperationBegunService
	) {
	}

}
