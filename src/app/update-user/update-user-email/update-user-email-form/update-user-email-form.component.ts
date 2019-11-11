import { Component } from '@angular/core';
import { UpdateEmailProcessorService }
	from '../../../services/data-operation-processor/update-email-processor.service';
import { PerformAppDataOperationService } from '../../../services/perform-app-data-operation.service';


@Component({
	selector: 'update-user-email-form',
	templateUrl: './update-user-email-form.component.html'
})
export class UpdateUserEmailFormComponent {

	heading = 'Update Email';


	constructor(
		private __emailUpdateProcessor: UpdateEmailProcessorService,
		private __performAppDataOperation: PerformAppDataOperationService
	) {
	}


	async save() {
		await this.__performAppDataOperation.go(this.__emailUpdateProcessor);
	}

}
