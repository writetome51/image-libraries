import { BackgroundExecutionStatusData as executionStatus }
	from '@runtime-state-data/background-execution-status.data';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ModuleTitleData as moduleTitle } from './module-title.data';


@Component({
	selector: 'add-images',
	template: `
		<header><h2>{{heading}}</h2></header>
		<div><p>{{instructions}}</p></div>

		<big-loading-spinner *ngIf="savingNewImages"></big-loading-spinner>

		<div *ngIf="!(savingNewImages)">
			<upload-images-from-device></upload-images-from-device>

			<enter-image-url></enter-image-url>
		</div>
	`
})
export class AddImagesComponent {

	heading = 'Add Images';

	instructions = `The images can come from your own device or from somewhere
	else in the web.`;


	get savingNewImages() {
		return executionStatus.waiting;
	}


	constructor(private __title: Title) {
		this.__title.setTitle(moduleTitle.data);
	}

}
