import { Injectable } from '@angular/core';
import { GetImagesService } from '../../image/get-images.service';
import { GetImagesTotalResultInterpreterService }
	from '../data-transport-result-interpreter/get-images-total-result-interpreter.service';
import { GetAllImagesProcessorService } from './get-all-images-processor.service';
import { TotalFetchingProcessorService } from './total-fetching-processor.service';


@Injectable({providedIn: 'root'})

export class GetAllImagesTotalProcessorService extends GetAllImagesProcessorService
	implements TotalFetchingProcessorService {

	constructor(
		__getImages: GetImagesService,
		__getImagesTotalResultInterpreter: GetImagesTotalResultInterpreterService
	) {
		super(__getImages, __getImagesTotalResultInterpreter);
	}

}
