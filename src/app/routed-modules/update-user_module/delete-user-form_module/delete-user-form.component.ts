import { Component } from '@angular/core';
import { DeletingAllUserImagesProgressData }
	from '@runtime-state-data/deleting-all-user-images-progress.data';
import { DeleteUserInputsService } from './delete-user-inputs.service';
import { GetPageTitleService as getPageTitle } from '@services/get-page-title.service';
import { ProcessDeleteUserService }
	from './process-delete-user_service/process-delete-user.service';
import { Title } from '@angular/platform-browser';
import { UpdateUserModuleTitleData as parentModuleTitle } from '../update-user-module-title.data';


@Component({
	selector: 'delete-user-form',
	template: `
		<progress-bar *ngIf="progress.percentageComplete > 0"
			[progress]="progress" [label]="'Deleting files: '"
		></progress-bar>

		<delete-user-form-instructions></delete-user-form-instructions>

		<delete-user-form-inputs clearFormOnInit clearAlertsOnDestroy></delete-user-form-inputs>
		<submit-form-button [label]="'Delete'" [validatingInputs]="inputs"
			[iDoThis]="process"
		></submit-form-button>
	`
})
export class DeleteUserFormComponent {

	progress = DeletingAllUserImagesProgressData;


	constructor(
		public process: ProcessDeleteUserService,
		public inputs: DeleteUserInputsService,
		title: Title
	) {
		title.setTitle(
			getPageTitle.go([parentModuleTitle, 'Delete Account'])
		);
	}

}
