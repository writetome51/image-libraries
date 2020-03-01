import { Component } from '@angular/core';
import { OperationStatusData as operationStatus }
	from '../../data/runtime-state-data/operation-status.data';


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
