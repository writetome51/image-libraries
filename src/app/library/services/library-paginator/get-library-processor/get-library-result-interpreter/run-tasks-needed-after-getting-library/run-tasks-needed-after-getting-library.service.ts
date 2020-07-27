import { Injectable } from '@angular/core';
import { DBLibrary } from '@interfaces/db-library';
import {
	LoadedLibraryData as loadedLibrary,
	ImageTotalData as imageTotal,
	ImagesLoadedFromData as loadedImagesStatus
} from '@runtime-state-data/static-classes/auto-resettable.data';
import { GetLibraryImagesProcessorService } from './get-library-images-processor.service';
import { IDoThis } from '@interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterGettingLibraryService implements IDoThis {

	constructor(private __getLibraryImagesProcessor: GetLibraryImagesProcessorService) {
	}


	async go(result: DBLibrary) {
		loadedLibrary.data = result;

		if (loadedLibrary.data._image_ids.length) {
			await this.__getLibraryImagesProcessor.process();
		}
		else {
			imageTotal.data = 0;
		}

		loadedImagesStatus.data = 'library';
	}

}
