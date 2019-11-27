import { Component } from '@angular/core';
import { UserDeletionProcessorService }
	from '../../services/data-operation-processor/user-deletion-processor.service';
import { PerformDataOperationService as performDataOperation }
	from '../../services/perform-data-operation.service';
import { ClearFormOnInitAndAlertOnDestroyComponent }
	from '../../clear-form-on-init-and-alert-on-destroy.component';


@Component({
	selector: 'delete-user-form',
	templateUrl: './delete-user-form.component.html',
	styles: ['.warning-text { color: red; font-weight: bold; }']
})
export class DeleteUserFormComponent extends ClearFormOnInitAndAlertOnDestroyComponent {


	tonto = {
		src: '../../../assets/tonto.jpg',
		width: 200,
		height: 615
	};


	constructor(private __userDeletionProcessor: UserDeletionProcessorService) {
		super();
	}


	async delete() {
		await performDataOperation.go(this.__userDeletionProcessor);
	}


}
