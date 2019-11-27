import { Component } from '@angular/core';
import { UpdateEmailProcessorService }
	from '../../services/data-operation-processor/update-email-processor.service';
import { PerformDataOperationService as performDataOperation }
	from '../../services/perform-data-operation.service';
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
		await performDataOperation.go(this.__updateEmailProcessor);
	}

}
