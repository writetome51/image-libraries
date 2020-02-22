import { DataTransportProcessorService } from './data-transport-processor.service';
import { Injectable } from '@angular/core';
import { GetImagesService } from '../image/get-images.service';
import { DBImage } from '../../interfaces/db-image';
import { GetLibraryImagesResultInterpreterService }
	from './data-transport-result-interpreter/get-library-images-result-interpreter.service';


@Injectable({providedIn: 'root'})

export class GetLibraryImagesProcessorService extends DataTransportProcessorService {

	constructor(
		private __getImages: GetImagesService,
		__getLibraryImagesResultInterpreter: GetLibraryImagesResultInterpreterService
	) {
		super(__getLibraryImagesResultInterpreter);
	}


	protected async _getResult(): Promise<DBImage[] | { error: object }> {
		return await this.__getImages.inLibrary();
	}

}
