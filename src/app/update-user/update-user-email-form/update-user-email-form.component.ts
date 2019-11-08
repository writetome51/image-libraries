import { Component } from '@angular/core';
import { UpdateEmailProcessorService }
	from '../../services/data-operation-processor/update-email-processor.service';
import { AlertService } from '../../services/alert.service';
import { CurrentUserService } from '../../services/user/current-user.service';
import { ClearAlertAndFormOnInitComponent } from '../../clear-alert-and-form-on-init.component';
import { PerformAppDataOperationService } from '../../services/perform-app-data-operation.service';


@Component({
	selector: 'update-user-email-form',
	templateUrl: './update-user-email-form.component.html'
})
export class UpdateUserEmailFormComponent extends ClearAlertAndFormOnInitComponent {

	heading = 'Update Email';


	constructor(
		private __emailUpdateProcessor: UpdateEmailProcessorService,
		private __performAppDataOperation: PerformAppDataOperationService,
		__alert: AlertService,
		__currentUser: CurrentUserService
	) {
		super(__alert, __currentUser);
	}


	async save() {
		await this.__performAppDataOperation.go(this.__emailUpdateProcessor);
	}

}
