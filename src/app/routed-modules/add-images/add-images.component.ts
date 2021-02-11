import { BackgroundExecutionStatusData as executionStatus }
	from '@runtime-state-data/background-execution-status.data';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ModuleTitleData as moduleTitle } from './module-title.data';


@Component({
	selector: 'add-images',
	templateUrl: './add-images.component.html'
})
export class AddImagesComponent {

	heading = 'Add Images';

	gettingImagesInstructions = `The images can come from your own device or from somewhere
	else in the web.`;


	get savingNewImages() {
		return executionStatus.waiting;
	}


	constructor(private __title: Title) {
		this.__title.setTitle(moduleTitle.data);
	}


}
