import { hasValue, noValue } from '@writetome51/has-value-no-value';
import { LibraryData as library } from '../../data/runtime-state-data/library.data';
import { Injectable } from '@angular/core';
import { LibraryImagesData as images } from '../../data/runtime-state-data/library-images.data';
import { DBImage } from '../../interfaces/db-image';
import { GetLibraryImagesProcessorService }
	from '../data-transport-processor/get-library-images-processor.service';
import { PerformDataOperationService as performDataOperation }
	from '../perform-data-operation.service';


@Injectable({providedIn: 'root'})

export class DisplayedImagesService {


	get data(): DBImage[] {
		if (hasValue(images.data)) return library.data._image_ids.map((id) => images.data[id]);
	}


	constructor(private __getLibraryImagesProcessor: GetLibraryImagesProcessorService) {
		if (noValue(images.data)) performDataOperation.go(this.__getLibraryImagesProcessor);
	}


}
