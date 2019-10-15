import { Component } from '@angular/core';
import { SuccessOrErrorMessageService }
	from '../success-or-error-message/success-or-error-message.service';
import { DataOperationBegunService } from '../services/data-operation-begun.service';


@Component({
	selector: 'create-user',
	templateUrl: './create-user.component.html'
})
export class CreateUserComponent {

	heading = 'Create Account';


	constructor(
		public successOrErrorMessage: SuccessOrErrorMessageService,
		public dataOperationBegun: DataOperationBegunService
	) {
	}

}
