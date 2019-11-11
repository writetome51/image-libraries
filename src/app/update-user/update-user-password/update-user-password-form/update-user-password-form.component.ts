import { Component } from '@angular/core';
import { UpdatePasswordProcessorService }
	from '../../../services/data-operation-processor/update-password-processor.service';
import { PerformAppDataOperationService } from '../../../services/perform-app-data-operation.service';


@Component({
	selector: 'update-user-password-form',
	templateUrl: './update-user-password-form.component.html'
})
export class UpdateUserPasswordFormComponent {

	heading = 'Update Password';


	constructor(
		private __updatePasswordProcessor: UpdatePasswordProcessorService,
		private __performAppDataOperation: PerformAppDataOperationService
	) {
	}


	async save() {
		await this.__performAppDataOperation.go(this.__updatePasswordProcessor);
	}

}
