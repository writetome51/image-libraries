import { Component } from '@angular/core';
import { UpdatePasswordProcessorService }
	from './update-password-processor_service/update-password-processor.service';
import { ModuleTitleData as moduleTitle } from '../module-title.data';
import { UpdateUserChoiceData as updateUserChoice } from '../update-user-choice.data';
import { Title } from '@angular/platform-browser';


@Component({
	selector: 'update-password-form',
	template: `
		<update-password-form-inputs clearFormOnInit clearAlertOnDestroy>
		</update-password-form-inputs>
		<submit-form-button [processor]="processor"></submit-form-button>
	`
})
export class UpdatePasswordFormComponent {

	constructor(
		public processor: UpdatePasswordProcessorService,
		private __title: Title
	) {
		this.__title.setTitle(
			moduleTitle.data + ' | ' + updateUserChoice.UpdatePasswordFormModule.link.label
		);
	}

}
