import { Component } from '@angular/core';
import { GetPageTitleService as getPageTitle } from '@services/get-page-title.service';
import { ProcessUpdateEmailService }
	from './process-update-email_service/process-update-email.service';
import { UpdateUserModuleTitleData as parentModuleTitle } from '../update-user-module-title.data';
import { Title } from '@angular/platform-browser';
import { ValidatingUpdateEmailInputsService }
	from './validating-update-email-inputs_service/validating-update-email-inputs.service';
import { CurrentUserFormInputsData }
	from '@runtime-state-data/static-classes/current-user-form-inputs.data';


@Component({
	selector: 'update-email-form',
	template: `
		<update-email-form-inputs clearAlertsOnDestroy
			resetToDefaultOnInit [resettables]="[currentUserFormInputs]"
		></update-email-form-inputs>

		<submit-form-button [validatingInputs]="inputs" [iDoThis]="process"></submit-form-button>
	`
})
export class UpdateEmailFormComponent {

	currentUserFormInputs = CurrentUserFormInputsData;

	constructor(
		public process: ProcessUpdateEmailService,
		public inputs: ValidatingUpdateEmailInputsService,
		title: Title
	) {
		title.setTitle( getPageTitle.go([parentModuleTitle, 'Email']) );
	}

}
