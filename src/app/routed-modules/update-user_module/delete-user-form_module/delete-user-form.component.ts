import { Component } from '@angular/core';
import { DeleteUserService } from './delete-user_service/delete-user.service';
import { DeleteUserInputsService } from './delete-user-inputs.service';
import { GetPageTitleService as getPageTitle } from '@services/get-page-title.service';
import { Title } from '@angular/platform-browser';
import { UpdateUserModuleTitleData as parentModuleTitle } from '../update-user-module-title.data';


@Component({
	selector: 'delete-user-form',
	template: `
		<delete-user-form-instructions></delete-user-form-instructions>

		<delete-user-form-inputs clearFormOnInit clearAlertsOnDestroy></delete-user-form-inputs>

		<submit-form-button [label]="'Delete'" [validatingInputs]="inputs"
			[iDoThis]="deleteUser"
		></submit-form-button>
	`
})
export class DeleteUserFormComponent {

	constructor(
		public deleteUser: DeleteUserService,
		public inputs: DeleteUserInputsService,
		title: Title
	) {
		title.setTitle(
			getPageTitle.go([parentModuleTitle, 'Delete Account'])
		);
	}

}
