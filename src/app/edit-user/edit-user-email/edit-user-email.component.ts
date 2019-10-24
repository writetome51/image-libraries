import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../services/user/current-user.service';
import { UserValidationRulesService } from '../../services/user-validation-rules.service';
import { EmailUpdateProcessorService }
	from '../../services/email-update-processor/email-update-processor.service';


@Component({
	selector: 'edit-user-email',
	templateUrl: './edit-user-email.component.html'
})
export class EditUserEmailComponent implements OnInit {


	constructor(
		public currentUser: CurrentUserService,
		public userValidationRules: UserValidationRulesService,
		private __emailUpdateProcessor: EmailUpdateProcessorService
	) {
	}


	ngOnInit(): void {
		this.currentUser.clearFormProperties();
	}


	async save() {
		await this.__emailUpdateProcessor.process();
	}


}
