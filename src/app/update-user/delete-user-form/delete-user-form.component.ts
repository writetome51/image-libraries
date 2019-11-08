import { Component } from '@angular/core';
import { UserDeletionProcessorService }
	from '../../services/data-operation-processor/user-deletion-processor.service';
import { DataOperationStatusService } from '../../services/data-operation-status.service';
import { ClearAlertAndFormOnInitComponent } from '../../clear-alert-and-form-on-init.component';
import { AlertService } from '../../services/alert.service';
import { CurrentUserService } from '../../services/user/current-user.service';
import { PerformAppDataOperationService } from '../../services/perform-app-data-operation.service';


@Component({
	selector: 'delete-user-form',
	templateUrl: './delete-user-form.component.html',
	styles: ['.warning-text { color: red; font-weight: bold; }']
})
export class DeleteUserFormComponent extends ClearAlertAndFormOnInitComponent {

	heading = 'Self Destruct?';
	tonto = {
		src: '../../../assets/tonto.jpg',
		width: 200,
		height: 615
	};


	constructor(
		private __userDeletionProcessor: UserDeletionProcessorService,
		private __performAppDataOperation: PerformAppDataOperationService,
		__alert: AlertService,
		__currentUser: CurrentUserService
	) {
		super(__alert, __currentUser);
	}


	async delete() {
		await this.__performAppDataOperation.go(this.__userDeletionProcessor);
	}

}
