import { Component } from '@angular/core';
import { UpdateEmailProcessorService }
	from '../../../services/data-operation-processor/update-email-processor.service';
import { PerformAppDataOperationService as performAppDataOperation }
	from '../../../services/perform-app-data-operation.service';


@Component({
	selector: 'update-user-email-form',
	templateUrl: './update-user-email-form.component.html'
})
export class UpdateUserEmailFormComponent {

	heading = 'Update Email';


	constructor(private __emailUpdateProcessor: UpdateEmailProcessorService) {
	}


	async save() {
		await performAppDataOperation.go(this.__emailUpdateProcessor);
	}

}
