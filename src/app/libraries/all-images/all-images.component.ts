import { Component } from '@angular/core';
import { DBImage } from '../../interfaces/db-image';
import { noValue, hasValue } from '@writetome51/has-value-no-value';
import { GetAllImagesProcessorService }
	// tslint:disable-next-line:max-line-length
	from '../../services/data-transport-processor/image-fetching-processor/get-all-images-processor.service';
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
		if (hasValue(loadedImages)) return Object.values(loadedImages);
	}


	constructor(private __getAllImagesProcessor: GetAllImagesProcessorService) {
		if (noValue(loadedImages)) performDataProcessRequiringWaiting.go(
			this.__getAllImagesProcessor, OperationStatusData
		);
	}

}
