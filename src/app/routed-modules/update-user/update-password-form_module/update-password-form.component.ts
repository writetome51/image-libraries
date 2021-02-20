import { Component } from '@angular/core';
import { UpdatePasswordProcessorService }
	from './update-password-processor_service/update-password-processor.service';
import { UpdateUserModuleTitleData as parentModuleTitle } from '../update-user-module-title.data';
import { Title } from '@angular/platform-browser';
import { UpdatePasswordFormModuleTitleData as thisModuleTitle }
	from './update-password-form-module-title.data';


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
		this.__title.setTitle(parentModuleTitle.data + thisModuleTitle.data);
	}

}
