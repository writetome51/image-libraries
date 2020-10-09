import { DBLibrary } from '@interfaces/db-library';
import { GetLibraryImagesProcessorService } from './get-library-images-processor.service';
import { IDoThis } from '@interfaces/i-do-this';
import { Injectable } from '@angular/core';
import {
	LoadedLibraryData as loadedLibrary, ImageTotalData as imageTotal,
	ImagesLoadedFromData as imagesLoadedFrom
} from '@runtime-state-data/static-classes/auto-resettable.data';


@Injectable({providedIn: 'root'})

export class RunTasksAfterGettingLibraryService implements IDoThis {

	constructor(private __getLibraryImagesProcessor: GetLibraryImagesProcessorService) {
	}


	async go(result: DBLibrary) {
		loadedLibrary.data = result;

		if (loadedLibrary.data._image_ids.length) {
			await this.__getLibraryImagesProcessor.process();
		}
		else imageTotal.data = 0;

		imagesLoadedFrom.data = 'library';
	}

}
