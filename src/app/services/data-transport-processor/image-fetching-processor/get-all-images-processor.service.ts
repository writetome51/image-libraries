import { DataTransportProcessorService } from '../data-transport-processor.service';
import { Injectable } from '@angular/core';
import { GetImagesService } from '../../image/get-images.service';
import { DBImage } from '../../../interfaces/db-image';
import { GetImagesResultInterpreterService }
	from '../data-transport-result-interpreter/get-images-result-interpreter.service';
import { ImageFetchingProcessorService } from './image-fetching-processor.service';


@Injectable({providedIn: 'root'})

export class GetAllImagesProcessorService extends DataTransportProcessorService
	implements ImageFetchingProcessorService {

	constructor(
		private __getImages: GetImagesService,
		__getImagesResultInterpreter: GetImagesResultInterpreterService
	) {
		super(__getImagesResultInterpreter);
	}


	protected async _getResult(): Promise<DBImage[] | { error: object }> {
		return await this.__getImages.all();
	}

}
