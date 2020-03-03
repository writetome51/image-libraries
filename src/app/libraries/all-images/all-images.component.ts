import { Component } from '@angular/core';
import { DBImage } from '../../interfaces/db-image';
import { noValue, hasValue } from '@writetome51/has-value-no-value';
import { LoadedImagesData as loadedImages } from '../../data/runtime-state-data/loaded-images.data';
import { AllImagesPaginatorService } from '../../services/paginator/all-images-paginator.service';


@Component({
	selector: 'all-images',
	templateUrl: './all-images.component.html'
})
export class AllImagesComponent {

	get images(): DBImage[] {
		if (hasValue(loadedImages.data)) return Object.values(loadedImages.data);
	}


	constructor(private __allImagesPaginator: AllImagesPaginatorService) {
		if (noValue(loadedImages.data)) this.__allImagesPaginator.set_currentPageNumber(1);
	}

}
