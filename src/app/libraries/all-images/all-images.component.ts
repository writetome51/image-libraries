import { Component } from '@angular/core';
import { AllImagesData as allImages } from '../../data/runtime-state-data/all-images.data';
import { DBImage } from '../../interfaces/db-image';
import { noValue, hasValue } from '@writetome51/has-value-no-value';
import { GetAllImagesProcessorService }
	from '../../services/data-transport-processor/get-all-images-processor.service';


@Component({
	selector: 'all-images',
	templateUrl: './all-images.component.html'
})
export class AllImagesComponent {

	get images(): DBImage[] {
		if (hasValue(allImages.data)) return Object.values(allImages.data);
	}


	constructor(private __getAllImagesProcessor: GetAllImagesProcessorService) {
		if (noValue(allImages.data)) this.__getAllImagesProcessor.process();
	}

}
