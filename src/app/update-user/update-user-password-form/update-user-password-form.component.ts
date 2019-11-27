import { Component } from '@angular/core';
import { UpdatePasswordProcessorService }
	from '../../services/data-operation-processor/update-password-processor.service';
import { PerformDataOperationService as performDataOperation }
	from '../../services/perform-data-operation.service';
import { ClearFormOnInitAndAlertOnDestroyComponent }
	from '../../clear-form-on-init-and-alert-on-destroy.component';


@Component({
	selector: 'update-user-password-form',
	templateUrl: './update-user-password-form.component.html'
})
export class UpdateUserPasswordFormComponent extends ClearFormOnInitAndAlertOnDestroyComponent {

	constructor(private __updatePasswordProcessor: UpdatePasswordProcessorService) {
		super();
	}


	async save() {
		await performDataOperation.go(this.__updatePasswordProcessor);
	}

}
