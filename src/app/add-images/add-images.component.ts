import { BackgroundProcessingStatusData as processingStatus }
	from '@runtime-state-data/background-processing-status.data';
import { Component } from '@angular/core';


@Component({
	selector: 'add-images',
	templateUrl: './add-images.component.html'
})
export class AddImagesComponent {

	heading = 'Add Images';

	gettingImagesInstructions = `The images can come from your own device or from somewhere
	else in the web.`;


	get savingNewImages() {
		return processingStatus.waiting;
	}

}
