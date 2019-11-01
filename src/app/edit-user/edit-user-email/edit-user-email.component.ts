import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../services/user/current-user.service';
import { UserValidationRulesService } from '../../services/user/user-validation-rules.service';
import { EmailUpdateProcessorService }
	from '../../services/email-update-processor/email-update-processor.service';
import { DataOperationStatusService } from '../../services/data-operation-status.service';


@Component({
	selector: 'edit-user-email',
	templateUrl: './edit-user-email.component.html'
})
export class EditUserEmailComponent implements OnInit {


	heading = 'Edit Email';


	constructor(
		public currentUser: CurrentUserService,
		public userValidationRules: UserValidationRulesService,
		private __emailUpdateProcessor: EmailUpdateProcessorService,
		private __dataOperationBegun: DataOperationStatusService
	) {
	}


	ngOnInit(): void {
		this.currentUser.clearFormProperties();
	}


	async save() {
		this.__dataOperationBegun.waitingForResult = true;
		await this.__emailUpdateProcessor.process();
		this.__dataOperationBegun.waitingForResult = false;
	}


}
