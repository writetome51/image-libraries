import { Component } from '@angular/core';
import { ProcessUpdatePasswordService }
	from './update-password-processor_service/process-update-password.service';
import { UpdateUserModuleTitleData as parentModuleTitle } from '../update-user-module-title.data';
import { Title } from '@angular/platform-browser';
import { UpdatePasswordFormModuleTitleData as thisModuleTitle }
	from './update-password-form-module-title.data';


@Component({
	selector: 'update-password-form',
	template: `
		<update-password-form-inputs clearFormOnInit clearAlertOnDestroy>
		</update-password-form-inputs>
		<submit-form-button [process]="processor"></submit-form-button>
	`
})
export class UpdatePasswordFormComponent {

	constructor(
		public processor: ProcessUpdatePasswordService,
		private __title: Title
	) {
		this.__title.setTitle(parentModuleTitle.data + thisModuleTitle.data);
	}

}
