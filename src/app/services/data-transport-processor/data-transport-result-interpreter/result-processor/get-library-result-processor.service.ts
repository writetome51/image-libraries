import { Injectable } from '@angular/core';
import { DirectProcessor } from '../../../../interfaces/direct-processor';
import { DBLibrary } from '../../../../interfaces/db-library';
import { LoadedLibraryData as loadedLibrary }
	from '../../../../data/runtime-state-data/static-classes/loaded-library.data';
import { GetLibraryImagesProcessorService }
	from '../../image-fetching-processor/get-library-images-processor.service';
import { ImageTotalData as imageTotal }
	from '../../../../data/runtime-state-data/static-classes/image-total.data';


@Injectable({providedIn: 'root'})

export class GetLibraryResultProcessorService implements DirectProcessor {

	constructor(private __getLibraryImagesProcessor: GetLibraryImagesProcessorService) {
	}


	async process(result: DBLibrary) {
		loadedLibrary.data = result;

		if (loadedLibrary.data._image_ids.length) await this.__getLibraryImagesProcessor.process();
		else imageTotal.data = 0;
	}

}
