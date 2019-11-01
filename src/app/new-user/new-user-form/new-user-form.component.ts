import { Component } from '@angular/core';
import { NewUserProcessorService }
	from '../../services/user/new-user-processor/new-user-processor.service';
import { DataOperationStatusService } from '../../services/data-operation-status.service';


@Component({
	selector: 'new-user-form',
	templateUrl: './new-user-form.component.html'
})
export class NewUserFormComponent {


	constructor(
		private __newUserProcessor: NewUserProcessorService,
		private __dataOperationStatus: DataOperationStatusService
	) {
	}


	async create() {
		this.__dataOperationStatus.waitingForResult = true;
		await this.__newUserProcessor.process();
		this.__dataOperationStatus.waitingForResult = false;
	}


}
