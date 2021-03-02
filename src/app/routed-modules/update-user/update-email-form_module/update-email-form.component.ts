import { Component } from '@angular/core';
import { ProcessUpdateEmailService }
	from './update-email-processor/process-update-email.service';
import { UpdateUserModuleTitleData as parentModuleTitle } from '../update-user-module-title.data';
import { Title } from '@angular/platform-browser';
import { UpdateEmailFormModuleTitleData as thisModuleTitle }
	from './update-email-form-module-title.data';


@Component({
	selector: 'update-email-form',
	template: `
		<update-email-form-inputs clearFormOnInit clearAlertOnDestroy></update-email-form-inputs>
		<submit-form-button [process]="processor"></submit-form-button>
	`
})
export class UpdateEmailFormComponent {

	constructor(
		public processor: ProcessUpdateEmailService,
		private __title: Title
	) {
		this.__title.setTitle(parentModuleTitle.data + thisModuleTitle.data);
	}

}
