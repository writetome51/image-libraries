import { Injectable } from '@angular/core';
import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { GetLibraryImagesService } from './get-library-images.service';
import { GetLibraryImagesResultInterpreterService }
	from './get-library-images-result-interpreter/get-library-images-result-interpreter.service';


@Injectable({providedIn: 'root'})
export class GetLibraryImagesProcessorService extends DataTransportProcessorService {

	constructor(
		__getResult: GetLibraryImagesService,
		__resultInterpreter: GetLibraryImagesResultInterpreterService
	) {
		super(__getResult, __resultInterpreter);
	}

}
