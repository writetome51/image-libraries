import { Component } from '@angular/core';
import { CurrentUserService } from '../../services/user/current-user.service';
import { DataOperationStatusService } from '../../services/data-operation-status.service';
import { UpdatePasswordProcessorService }
	from '../../services/update-password-processor/update-password-processor.service';
import { UserValidationRulesService } from '../../services/user/user-validation-rules.service';


@Component({
	selector: 'update-user-password',
	templateUrl: './update-user-password.component.html'
})
export class UpdateUserPasswordComponent {


	heading = 'Update Password';


	constructor(
		public currentUser: CurrentUserService,
		public userValidationRules: UserValidationRulesService,
		private __dataOperationBegun: DataOperationStatusService,
		private __passwordUpdateProcessor: UpdatePasswordProcessorService
	) {
	}


	async save() {
		this.__dataOperationBegun.waitingForResult = true;
		await this.__passwordUpdateProcessor.process();
		this.__dataOperationBegun.waitingForResult = false;
	}


}
