import { DataTransportProcessorService } from './data-transport-processor.service';
import { Injectable } from '@angular/core';
import { GetImagesService } from '../image/get-images.service';
import { DBImage } from '../../interfaces/db-image';
import { GetAllImagesResultInterpreterService }
	from './data-transport-result-interpreter/get-all-images-result-interpreter.service';


@Injectable({providedIn: 'root'})

export class GetAllImagesProcessorService extends DataTransportProcessorService {

	constructor(
		private __getImages: GetImagesService,
		__getAllImagesResultInterpreter: GetAllImagesResultInterpreterService
	) {
		super(__getAllImagesResultInterpreter);
	}


	protected async _getResult(): Promise<DBImage[] | { error: object }> {
		return await this.__getImages.all();
	}

}
