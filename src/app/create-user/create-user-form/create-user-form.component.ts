import { Component } from '@angular/core';
import { NewUserProcessorService }
	from '../../services/user/new-user-processor/new-user-processor.service';
import { DataOperationStatusService } from '../../services/data-operation-status.service';


@Component({
	selector: 'create-user-form',
	templateUrl: './create-user-form.component.html'
})
export class CreateUserFormComponent {


	constructor(
		private __newUserProcessor: NewUserProcessorService,
		private __dataOperationBegun: DataOperationStatusService
	) {
	}


	async create() {
		this.__dataOperationBegun.waitingForResult = true;
		await this.__newUserProcessor.process();
		this.__dataOperationBegun.waitingForResult = false;
	}


}
