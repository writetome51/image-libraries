import { Component } from '@angular/core';
import { GetPageTitleService as getPageTitle } from '@services/get-page-title.service';
import { ProcessUpdateEmailService }
	from './process-update-email_service/process-update-email.service';
import { UpdateUserModuleTitleData as parentModuleTitle } from '../update-user-module-title.data';
import { Title } from '@angular/platform-browser';
import { UpdateEmailInputsService }
	from './update-email-inputs_service/update-email-inputs.service';


@Component({
	selector: 'update-email-form',
	template: `
		<update-email-form-inputs clearFormOnInit clearAlertsOnDestroy></update-email-form-inputs>
		<submit-form-button [validatingInputs]="inputs" [iDoThis]="process"></submit-form-button>
	`
})
export class UpdateEmailFormComponent {

	constructor(
		public process: ProcessUpdateEmailService,
		public inputs: UpdateEmailInputsService,
		title: Title
	) {
		title.setTitle( getPageTitle.go([parentModuleTitle, 'Email']) );
	}

}
