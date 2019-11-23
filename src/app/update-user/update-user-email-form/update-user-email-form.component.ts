import { Component } from '@angular/core';
import { UpdateEmailProcessorService }
	from '../../services/data-operation-processor/update-email-processor.service';
import { PerformAppDataOperationService as performAppDataOperation }
	from '../../services/perform-app-data-operation.service';
import { ClearFormOnInitAndAlertOnDestroyComponent }
	from '../../clear-form-on-init-and-alert-on-destroy.component';


@Component({
	selector: 'update-user-email-form',
	templateUrl: './update-user-email-form.component.html'
})
export class UpdateUserEmailFormComponent extends ClearFormOnInitAndAlertOnDestroyComponent {

	constructor(private __updateEmailProcessor: UpdateEmailProcessorService) {
		super();
	}


	async save() {
		await performAppDataOperation.go(this.__updateEmailProcessor);
	}

}
