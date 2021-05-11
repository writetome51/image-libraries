import { Component } from '@angular/core';
import { GetPageTitleService as getPageTitle } from '@services/get-page-title.service';
import { ProcessUpdatePasswordService }
	from './process-update-password_service/process-update-password.service';
import { Title } from '@angular/platform-browser';
import { UpdateUserModuleTitleData as parentModuleTitle } from '../update-user-module-title.data';


@Component({
	selector: 'update-password-form',
	template: `
		<p class="warning-text">Since this demo doesn't use SSL, do not use a password that
			is truly secret.
		</p>
		<update-password-form-inputs clearFormOnInit clearAlertsOnDestroy>
		</update-password-form-inputs>
		<submit-form-button [iDoThis]="process"></submit-form-button>
	`
})
export class UpdatePasswordFormComponent {

	constructor(
		public process: ProcessUpdatePasswordService, title: Title
	) {
		title.setTitle( getPageTitle.go([parentModuleTitle, 'Password']) );
	}

}
