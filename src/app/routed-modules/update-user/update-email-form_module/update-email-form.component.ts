import { Component } from '@angular/core';
import { ProcessUpdateEmailService }
	from './process-update-email_service/process-update-email.service';
import { UpdateUserModuleTitleData as parentModuleTitle } from '../update-user-module-title.data';
import { Title } from '@angular/platform-browser';


@Component({
	selector: 'update-email-form',
	template: `
		<update-email-form-inputs clearFormOnInit clearAlertOnDestroy></update-email-form-inputs>
		<submit-form-button [process]="process"></submit-form-button>
	`
})
export class UpdateEmailFormComponent {

	constructor(
		public process: ProcessUpdateEmailService,
		private __title: Title
	) {
		this.__title.setTitle(parentModuleTitle.data + 'Email');
	}

}
