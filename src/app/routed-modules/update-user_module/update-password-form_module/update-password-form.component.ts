import { appName } from '@string-constants/app-name';
import { Component } from '@angular/core';
import { GetFormattedPageTitleService as getFormattedPageTitle }
	from '@services/get-formatted-page-title.service';
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
		public process: ProcessUpdatePasswordService,
		private __title: Title
	) {
		this.__title.setTitle( getFormattedPageTitle.go([appName, parentModuleTitle, 'Password']) );
	}

}
