import { Component } from '@angular/core';
import { UserDeletionProcessorService }
	from '../../services/user/user-deletion-processor/user-deletion-processor.service';
import { DataOperationStatusService } from '../../services/data-operation-status.service';


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
		private __dataOperationStatus: DataOperationStatusService
	) {
	}


	async delete() {
		this.__dataOperationStatus.waitingForResult = true;
		await this.__userDeletionProcessor.process();
		this.__dataOperationStatus.waitingForResult = false;
	}


}
