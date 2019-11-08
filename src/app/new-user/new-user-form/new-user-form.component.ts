import { Component } from '@angular/core';
import { NewUserProcessorService }
	from '../../services/data-operation-processor/new-user-processor.service';
import { PerformAppDataOperationService } from '../../services/perform-app-data-operation.service';


@Component({
	selector: 'new-user-form',
	templateUrl: './new-user-form.component.html'
})
export class NewUserFormComponent {

	constructor(
		private __newUserProcessor: NewUserProcessorService,
		private __performAppDataOperation: PerformAppDataOperationService
	) {
	}


	async create() {
		await this.__performAppDataOperation.go(this.__newUserProcessor);
	}

}
