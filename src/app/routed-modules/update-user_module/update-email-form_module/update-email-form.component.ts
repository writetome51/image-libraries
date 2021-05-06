import { appName } from '@string-constants/app-name';
import { Component } from '@angular/core';
import { GetFormattedPageTitleService as getFormattedPageTitle }
	from '@services/get-formatted-page-title.service';
import { ProcessUpdateEmailService }
	from './process-update-email_service/process-update-email.service';
import { UpdateUserModuleTitleData as parentModuleTitle } from '../update-user-module-title.data';
import { Title } from '@angular/platform-browser';


@Component({
	selector: 'update-email-form',
	template: `
		<update-email-form-inputs clearFormOnInit clearAlertsOnDestroy></update-email-form-inputs>
		<submit-form-button [iDoThis]="process"></submit-form-button>
	`
})
export class UpdateEmailFormComponent {

	constructor(
		public process: ProcessUpdateEmailService,
		private __title: Title
	) {
		this.__title.setTitle( getFormattedPageTitle.go([appName, parentModuleTitle, 'Email']) );
	}

}
