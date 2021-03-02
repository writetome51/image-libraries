import { Component } from '@angular/core';
import { ProcessUpdatePasswordService }
	from './process-update-password_service/process-update-password.service';
import { UpdateUserModuleTitleData as parentModuleTitle } from '../update-user-module-title.data';
import { Title } from '@angular/platform-browser';


@Component({
	selector: 'update-password-form',
	template: `
		<update-password-form-inputs clearFormOnInit clearAlertOnDestroy>
		</update-password-form-inputs>
		<submit-form-button [process]="process"></submit-form-button>
	`
})
export class UpdatePasswordFormComponent {

	constructor(
		public process: ProcessUpdatePasswordService,
		private __title: Title
	) {
		this.__title.setTitle(parentModuleTitle.data + 'Password');
	}

}
