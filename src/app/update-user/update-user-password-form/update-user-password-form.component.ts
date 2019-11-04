import { Component } from '@angular/core';
import { DataOperationStatusService } from '../../services/data-operation-status.service';
import { UpdatePasswordProcessorService }
	from '../../services/data-operation-processor/update-password-processor.service';


@Component({
	selector: 'update-user-password-form',
	templateUrl: './update-user-password-form.component.html'
})
export class UpdateUserPasswordFormComponent {


	heading = 'Update Password';


	constructor(
		private __dataOperationBegun: DataOperationStatusService,
		private __updatePasswordProcessor: UpdatePasswordProcessorService
	) {
	}


	async save() {
		this.__dataOperationBegun.waitingForResult = true;
		await this.__updatePasswordProcessor.process();
		this.__dataOperationBegun.waitingForResult = false;
	}


}
