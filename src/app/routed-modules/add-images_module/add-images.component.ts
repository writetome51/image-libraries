import { appName } from '@string-constants/app-name';
import { BackgroundExecutionStatusData as executionStatus }
	from '@runtime-state-data/background-execution-status.data';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UploadingImagesProgressData } from '@runtime-state-data/uploading-images-progress.data';


@Component({
	selector: 'add-images',
	template: `
		<header><h2>{{heading}}</h2></header>
		<div><p>{{instructions}}</p></div>

		<big-loading-spinner *ngIf="savingNewImages"></big-loading-spinner>
		<progress-bar *ngIf="progress.percentageComplete > 0 && progress.percentageComplete < 100"
			[progress]="progress"
		>
		</progress-bar>

		<div *ngIf="!(savingNewImages)">
			<upload-images-from-device></upload-images-from-device>

			<enter-image-url></enter-image-url>
		</div>
	`
})
export class AddImagesComponent {

	heading = 'Add Images';
	progress = UploadingImagesProgressData;
	instructions = `The images can come from your own device or from somewhere
	else in the web.`;


	get savingNewImages() {
		return executionStatus.waiting;
	}


	constructor(private __title: Title) {
		this.__title.setTitle(appName + ' | ' + this.heading);
	}

}
