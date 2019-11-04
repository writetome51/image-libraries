import { Component } from '@angular/core';
import { UpdateEmailProcessorService }
	from '../../services/update-email-processor.service';
import { DataOperationStatusService } from '../../services/data-operation-status.service';


@Component({
	selector: 'update-user-email-form',
	templateUrl: './update-user-email-form.component.html'
})
export class UpdateUserEmailFormComponent {


	heading = 'Update Email';


	constructor(
		private __emailUpdateProcessor: UpdateEmailProcessorService,
		private __dataOperationBegun: DataOperationStatusService
	) {
	}


	async save() {
		this.__dataOperationBegun.waitingForResult = true;
		await this.__emailUpdateProcessor.process();
		this.__dataOperationBegun.waitingForResult = false;
	}


}
