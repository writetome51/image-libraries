import { Component } from '@angular/core';
import { DeleteUserFormModuleTitleData as thisModuleTitle }
	from './delete-user-form-module-title.data';
import { environment } from '@environments/environment';
import { HTMLImage } from '@interfaces/html-image.interface';
import { ProcessDeleteUserService }
	from './process-delete-user_service/process-delete-user.service';
import { DeletingAllUserImagesProgressData }
	from '@runtime-state-data/deleting-all-user-images-progress.data';
import { Title } from '@angular/platform-browser';
import { UpdateUserModuleTitleData as parentModuleTitle } from '../update-user-module-title.data';


@Component({
	selector: 'delete-user-form',
	template: `
		<div>
			<html-image [data]="explodingHead"></html-image>
			<p class="warning-text">You cannot undo this.</p>

			<p>If you wish to proceed, enter your info and click Delete</p>
		</div>
		<deleting-image-files-progress-bar *ngIf="progress.percentageComplete > 0">
		</deleting-image-files-progress-bar>

		<delete-user-form-inputs clearFormOnInit clearAlertsOnDestroy></delete-user-form-inputs>
		<submit-form-button [label]="'Delete'" [iDoThis]="process"></submit-form-button>
	`,
	styles: ['.warning-text { color: red; font-weight: bold; }']
})
export class DeleteUserFormComponent {

	explodingHead: HTMLImage = {
		src: environment.assets + 'head-exploding.gif',
		alt: 'Exploding head',
		width: 124
	};

	progress = DeletingAllUserImagesProgressData;


	constructor(
		public process: ProcessDeleteUserService,
		private __title: Title
	) {
		this.__title.setTitle(parentModuleTitle.data + thisModuleTitle.data);
	}

}
