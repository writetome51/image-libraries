import { Component } from '@angular/core';
import { UpdateEmailProcessorService }
	from './update-email-processor/update-email-processor.service';
import { ModuleTitleData as moduleTitle } from '../module-title.data';
import { UpdateUserChoiceData as updateUserChoice } from '../update-user-choice.data';
import { Title } from '@angular/platform-browser';


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
		this.__title.setTitle(
			moduleTitle.data + ' | ' + updateUserChoice.UpdateEmailFormModule.link.label
		);
	}

}
