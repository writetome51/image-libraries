import { BackgroundExecutionStatusData as executionStatus }
	from '@runtime-state-data/background-execution-status.data';
import { Component } from '@angular/core';
import { GetPageTitleService as getPageTitle } from '@services/get-page-title.service';
import { Title } from '@angular/platform-browser';


@Component({
	selector: 'add-images',
	template: `
		<header><h2>{{heading}}</h2></header>

		<div><p>{{instructions}}</p></div>
		<p class="warning-text">{{warning}}</p>

		<big-loading-spinner *ngIf="savingNewImages; else showAddingControls"></big-loading-spinner>

		<ng-template #showAddingControls>
			<div>
				<upload-images-from-device></upload-images-from-device>
				<enter-image-url></enter-image-url>
			</div>
		</ng-template>
	`
})
export class AddImagesComponent {

	heading = 'Add Images';
	instructions = `The images can come from your own device or from somewhere
		else in the web.`;
	warning = 'Do not upload highly sensitive images. They will be accessible at public URLs.';


	get savingNewImages() {
		return executionStatus.waiting;
	}


	constructor(private __title: Title) {
		this.__title.setTitle(getPageTitle.go([this.heading]));
	}

}
