import { Component } from '@angular/core';
import { UpdatePasswordProcessorService }
	from '../../services/data-operation-processor/update-password-processor.service';
import { ClearAlertAndFormOnInitComponent } from '../../clear-alert-and-form-on-init.component';
import { AlertService } from '../../services/alert.service';
import { CurrentUserService } from '../../services/user/current-user.service';
import { PerformAppDataOperationService } from '../../services/perform-app-data-operation.service';


@Component({
	selector: 'update-user-password-form',
	templateUrl: './update-user-password-form.component.html'
})
export class UpdateUserPasswordFormComponent extends ClearAlertAndFormOnInitComponent {


	heading = 'Update Password';


	constructor(
		private __updatePasswordProcessor: UpdatePasswordProcessorService,
		private __performAppDataOperation: PerformAppDataOperationService,
		__alert: AlertService,
		__currentUser: CurrentUserService
	) {
		super(__alert, __currentUser);
	}


	async save() {
		await this.__performAppDataOperation.go(this.__updatePasswordProcessor);
	}


}
