import { Component } from '@angular/core';
import { ProcessingButtonOperationStatusData as dataOperationStatus }
	from '../../data/runtime-state-data/processing-button-operation-status.data';


@Component({
	selector: 'add-images',
	templateUrl: './add-images.component.html'
})
export class AddImagesComponent {

	gettingImagesInstructions = `The images can come from your own device or from somewhere
	else in the web.`;


	get savingNewImages() {
		return dataOperationStatus.waiting;
	}

}
