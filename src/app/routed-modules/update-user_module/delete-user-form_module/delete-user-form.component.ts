import { Component } from '@angular/core';
import { DeleteUserFormModuleTitleData as thisModuleTitle }
	from './delete-user-form-module-title.data';
import { ProcessDeleteUserService }
	from './process-delete-user_service/process-delete-user.service';
import { DeletingAllUserImagesProgressData }
	from '@runtime-state-data/deleting-all-user-images-progress.data';
import { Title } from '@angular/platform-browser';
import { UpdateUserModuleTitleData as parentModuleTitle } from '../update-user-module-title.data';


@Component({
	selector: 'delete-user-form',
	template: `
		<progress-bar [progress]="progress"></progress-bar>

		<delete-user-form-instructions></delete-user-form-instructions>

		<delete-user-form-inputs clearFormOnInit clearAlertsOnDestroy></delete-user-form-inputs>
		<submit-form-button [label]="'Delete'" [iDoThis]="process"></submit-form-button>
	`
})
export class DeleteUserFormComponent {

	progress = DeletingAllUserImagesProgressData;


	constructor(
		public process: ProcessDeleteUserService,
		private __title: Title
	) {
		this.__title.setTitle(parentModuleTitle.data + thisModuleTitle.data);
	}

}
