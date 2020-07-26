import { Component } from '@angular/core';
import { BackgroundProcessingStatusData as operationStatus }
	from '../shared/data/runtime-state/background-processing-status.data';


@Component({
	selector: 'add-images',
	templateUrl: './add-images.component.html'
})
export class AddImagesComponent {

	gettingImagesInstructions = `The images can come from your own device or from somewhere
	else in the web.`;


	get savingNewImages() {
		return operationStatus.waiting;
	}

}
