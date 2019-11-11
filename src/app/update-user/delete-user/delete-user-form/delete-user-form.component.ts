import { Component } from '@angular/core';
import { UserDeletionProcessorService }
	from '../../../services/data-operation-processor/user-deletion-processor.service';
import { PerformAppDataOperationService } from '../../../services/perform-app-data-operation.service';


@Component({
	selector: 'delete-user-form',
	templateUrl: './delete-user-form.component.html',
	styles: ['.warning-text { color: red; font-weight: bold; }']
})
export class DeleteUserFormComponent {

	heading = 'Self Destruct?';
	tonto = {
		src: '../../../assets/tonto.jpg',
		width: 200,
		height: 615
	};


	constructor(
		private __userDeletionProcessor: UserDeletionProcessorService,
		private __performAppDataOperation: PerformAppDataOperationService
	) {
	}


	async delete() {
		await this.__performAppDataOperation.go(this.__userDeletionProcessor);
	}

}
