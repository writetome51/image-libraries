import { Component } from '@angular/core';
import { DBImage } from '../../interfaces/db-image';
import { noValue } from '@writetome51/has-value-no-value';
import { GetAllImagesProcessorService }
	from '../../services/data-transport-processor/get-all-images-processor.service';
import { LoadedImagesData as loadedImages } from '../../data/runtime-state-data/loaded-images.data';
import { PerformDataProcessRequiringWaitingService as performDataProcessRequiringWaiting }
	from '../../services/perform-data-process-requiring-waiting.service';
import { OperationStatusData } from '../../data/runtime-state-data/operation-status.data';


@Component({
	selector: 'all-images',
	templateUrl: './all-images.component.html'
})
export class AllImagesComponent {

	get images(): DBImage[] {
		return Object.values(loadedImages.data);
	}


	constructor(private __getAllImagesProcessor: GetAllImagesProcessorService) {
		if (noValue(loadedImages.data)) performDataProcessRequiringWaiting.go(
			this.__getAllImagesProcessor, OperationStatusData
		);
	}

}
