import { Component } from '@angular/core';
import { DataOperationStatusData as dataOperationStatus }
	from '../../data/runtime-state-data/data-operation-status.data';


@Component({
	selector: 'add-images',
	templateUrl: './add-images.component.html'
})
export class AddImagesComponent {

	gettingImagesInstructions = `The images can come from your own device or from somewhere
	else in the web.`;


	get savingNewImages() {
		return dataOperationStatus.waitingForResult;
	}

}
