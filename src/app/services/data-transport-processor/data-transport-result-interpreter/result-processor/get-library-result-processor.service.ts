import { Injectable } from '@angular/core';
import { DirectProcessor } from '../../../../interfaces/direct-processor';
import { DBLibrary } from '../../../../interfaces/db-library';
import { LoadedLibraryData as loadedLibrary }
	from '../../../../data/runtime-state-data/loaded-library.data';
import { GetLibraryImagesProcessorService } from '../../get-library-images-processor.service';


@Injectable({providedIn: 'root'})

export class GetLibraryResultProcessorService implements DirectProcessor {

	constructor(private __getLibraryImagesProcessor: GetLibraryImagesProcessorService) {
	}


	async process(result: DBLibrary) {
		// @ts-ignore
		loadedLibrary.data = result;
		if (loadedLibrary.data._image_ids.length) await this.__getLibraryImagesProcessor.process();
	}

}
