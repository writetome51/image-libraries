import { Component } from '@angular/core';
import { MessageService }
	from '../services/message.service';
import { DataOperationBegunService } from '../services/data-operation-begun.service';


@Component({
	selector: 'create-user',
	templateUrl: './create-user.component.html'
})
export class CreateUserComponent {

	heading = 'Create Account';


	constructor(
		public successOrErrorMessage: MessageService,
		public dataOperationBegun: DataOperationBegunService
	) {
	}

}
