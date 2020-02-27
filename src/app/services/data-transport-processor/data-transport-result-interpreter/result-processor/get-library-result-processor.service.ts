import { Injectable } from '@angular/core';
import { DirectProcessor } from '../../../../interfaces/direct-processor';
import { DBLibrary } from '../../../../interfaces/db-library';
import { LibraryData as library } from '../../../../data/runtime-state-data/library.data';
import { GetLibraryImagesProcessorService } from '../../get-library-images-processor.service';


@Injectable({providedIn: 'root'})

export class GetLibraryResultProcessorService implements DirectProcessor {

	constructor(private __getLibraryImagesProcessor: GetLibraryImagesProcessorService) {
	}

	async process(result: DBLibrary) {
		// @ts-ignore
		library.data = result;
		await this.__getLibraryImagesProcessor.process();
	}

}
