import { Component } from '@angular/core';
import { GetPageTitleService as getPageTitle } from '@services/get-page-title.service';
import { ProcessUpdatePasswordService }
	from './process-update-password_service/process-update-password.service';
import { Title } from '@angular/platform-browser';
import { UpdateUserModuleTitleData as parentModuleTitle } from '../update-user-module-title.data';
import { changePasswordWarning } from '@string-constants/warnings';
import { ValidatingUpdatePasswordInputsService }
	from './validating-update-password-inputs_service/validating-update-password-inputs.service';
import { CurrentUserFormInputsData }
	from '@runtime-state-data/static-classes/current-user-form-inputs.data';


@Component({
	selector: 'update-password-form',
	template: `
		<p class="warning-text">{{warning}}</p>

		<update-password-form-inputs clearAlertsOnDestroy
			resetToDefaultOnInit [resettables]="[currentUserFormInputs]"
		></update-password-form-inputs>

		<submit-form-button [validatingInputs]="inputs" [iDoThis]="process"></submit-form-button>
	`
})
export class UpdatePasswordFormComponent {

	warning = changePasswordWarning;
	currentUserFormInputs = CurrentUserFormInputsData;

	constructor(
		public process: ProcessUpdatePasswordService,
		public inputs: ValidatingUpdatePasswordInputsService,
		title: Title
	) {
		title.setTitle( getPageTitle.go([parentModuleTitle, 'Password']) );
	}

}
