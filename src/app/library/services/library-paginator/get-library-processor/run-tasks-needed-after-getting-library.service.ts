import { Injectable } from '@angular/core';
import { DBLibrary } from '../../../../../interfaces/db-library';
import { LoadedLibraryData as loadedLibrary }
	from '../../../../../data-structures/runtime-state-data/static-classes/resettable-to-default/loaded-library.data';
import { GetLibraryImagesProcessorService } from './get-library-images-processor.service';
import { ImageTotalData as imageTotal }
	from '../../../../../data-structures/runtime-state-data/static-classes/resettable-to-default/image-total.data';
import { ImagesLoadedFromData as loadedImagesStatus }
	from '../../../../../data-structures/runtime-state-data/static-classes/resettable-to-default/images-loaded-from.data';
import { IDoThis } from '../../../../../interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterGettingLibraryService implements IDoThis {

	constructor(private __getLibraryImagesProcessor: GetLibraryImagesProcessorService) {
	}


	async go(result: DBLibrary) {
		loadedLibrary.data = result;

		if (loadedLibrary.data._image_ids.length) await this.__getLibraryImagesProcessor.process();
		else imageTotal.data = 0;

		loadedImagesStatus.data = 'library';
	}

}
