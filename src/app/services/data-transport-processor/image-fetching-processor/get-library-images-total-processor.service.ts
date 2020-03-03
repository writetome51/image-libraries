import { Injectable } from '@angular/core';
import { GetImagesService } from '../../image/get-images.service';
import { GetImagesTotalResultInterpreterService }
	from '../data-transport-result-interpreter/get-images-total-result-interpreter.service';
import { GetLibraryImagesProcessorService } from './get-library-images-processor.service';
import { TotalFetchingProcessorService } from './total-fetching-processor.service';


@Injectable({providedIn: 'root'})

export class GetLibraryImagesTotalProcessorService extends GetLibraryImagesProcessorService
	implements TotalFetchingProcessorService {

	constructor(
		__getImages: GetImagesService,
		__getImagesTotalResultInterpreter: GetImagesTotalResultInterpreterService
	) {
		super(__getImages, __getImagesTotalResultInterpreter);
	}

}
