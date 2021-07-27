import { Component } from '@angular/core';
import { CurrentUserFormInputsData }
	from '@runtime-state-data/static-classes/current-user-form-inputs.data';
import { DeleteUserService } from './delete-user_service/delete-user.service';
import { ValidatingDeleteUserInputsService } from './validating-delete-user-inputs.service';
import { GetPageTitleService as getPageTitle } from '@services/get-page-title.service';
import { Title } from '@angular/platform-browser';
import { UpdateUserModuleTitleData as parentModuleTitle } from '../update-user-module-title.data';


@Component({
	selector: 'delete-user-form',
	template: `
		<delete-user-form-instructions></delete-user-form-instructions>

		<delete-user-form-inputs clearAlertsOnDestroy
			resetToDefaultOnInit [data]="[currentUserFormInputs]"
		></delete-user-form-inputs>

		<submit-form-button [label]="'Delete'" [validatingInputs]="inputs"
							[iDoThis]="deleteUser"
		></submit-form-button>
	`
})
export class DeleteUserFormComponent {

	currentUserFormInputs = CurrentUserFormInputsData;


	constructor(
		public deleteUser: DeleteUserService,
		public inputs: ValidatingDeleteUserInputsService,
		title: Title
	) {
		title.setTitle(
			getPageTitle.go([parentModuleTitle, 'Delete Account'])
		);
	}

}
