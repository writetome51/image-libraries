import { Injectable } from '@angular/core';
import { DBLibrary } from '../../../../../../interfaces/db-library';
import { LoadedLibraryData as loadedLibrary }
	from '../../../../../../data-structures/runtime-state-data/static-classes/loaded-library.data';
import { GetLibraryImagesProcessorService }
	from '../../../get-images/get-library-images-processor.service';
import { ImageTotalData as imageTotal }
	from '../../../../../../data-structures/runtime-state-data/static-classes/image-total.data';
import { ImagesLoadedFromData as loadedImagesStatus }
	from '../../../../../../data-structures/runtime-state-data/static-classes/images-loaded-from.data';
import { IDoThis } from '../../../../../../interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterSuccessfulGettingLibraryService implements IDoThis {

	constructor(private __getLibraryImagesProcessor: GetLibraryImagesProcessorService) {
	}


	async go(result: DBLibrary) {
		loadedLibrary.data = result;

		if (loadedLibrary.data._image_ids.length) await this.__getLibraryImagesProcessor.process();
		else imageTotal.data = 0;

		loadedImagesStatus.data = 'library';
	}

}
