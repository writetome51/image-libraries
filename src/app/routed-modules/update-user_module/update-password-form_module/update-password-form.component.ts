import { Component } from '@angular/core';
import { GetPageTitleService as getPageTitle } from '@services/get-page-title.service';
import { ProcessUpdatePasswordService }
	from './process-update-password_service/process-update-password.service';
import { Title } from '@angular/platform-browser';
import { UpdateUserModuleTitleData as parentModuleTitle } from '../update-user-module-title.data';
import { changePasswordWarning } from '@string-constants/warnings';
import { UpdatePasswordInputsService }
	from './update-password-inputs_service/update-password-inputs.service';


@Component({
	selector: 'update-password-form',
	template: `
		<p class="warning-text">{{warning}}</p>

		<update-password-form-inputs clearFormOnInit clearAlertsOnDestroy>
		</update-password-form-inputs>

		<submit-form-button [validatingInputs]="inputs" [iDoThis]="process"></submit-form-button>
	`
})
export class UpdatePasswordFormComponent {

	warning = changePasswordWarning;

	constructor(
		public process: ProcessUpdatePasswordService,
		public inputs: UpdatePasswordInputsService,
		title: Title
	) {
		title.setTitle( getPageTitle.go([parentModuleTitle, 'Password']) );
	}

}
