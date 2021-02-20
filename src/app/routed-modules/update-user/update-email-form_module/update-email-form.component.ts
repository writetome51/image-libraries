import { Component } from '@angular/core';
import { UpdateEmailProcessorService }
	from './update-email-processor/update-email-processor.service';
import { UpdateUserModuleTitleData as parentModuleTitle } from '../update-user-module-title.data';
import { Title } from '@angular/platform-browser';
import { UpdateEmailFormModuleTitleData as thisModuleTitle }
	from './update-email-form-module-title.data';


@Component({
	selector: 'update-email-form',
	template: `
		<update-email-form-inputs clearFormOnInit clearAlertOnDestroy></update-email-form-inputs>
		<submit-form-button [processor]="processor"></submit-form-button>
	`
})
export class UpdateEmailFormComponent {

	constructor(
		public processor: UpdateEmailProcessorService,
		private __title: Title
	) {
		this.__title.setTitle(parentModuleTitle.data + thisModuleTitle.data);
	}

}
