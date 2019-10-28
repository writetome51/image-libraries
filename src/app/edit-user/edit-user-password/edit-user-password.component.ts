import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../services/user/current-user.service';
import { DataOperationStatusService } from '../../services/data-operation-status.service';
import { PasswordUpdateProcessorService }
	from '../../services/password-update-processor/password-update-processor.service';
import { UserValidationRulesService } from '../../services/user/user-validation-rules.service';


@Component({
	selector: 'edit-user-password',
	templateUrl: './edit-user-password.component.html'
})
export class EditUserPasswordComponent implements OnInit {


	constructor(
		public currentUser: CurrentUserService,
		public userValidationRules: UserValidationRulesService,
		private __dataOperationBegun: DataOperationStatusService,
		private __passwordUpdateProcessor: PasswordUpdateProcessorService
	) {
	}


	ngOnInit(): void {
		this.currentUser.clearFormProperties();
	}


	async save() {
		this.__dataOperationBegun.waitingForResult = true;
		await this.__passwordUpdateProcessor.process();
		this.__dataOperationBegun.waitingForResult = false;
	}


}
