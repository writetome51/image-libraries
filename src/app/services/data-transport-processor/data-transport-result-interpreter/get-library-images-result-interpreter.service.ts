import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { GetLibraryImagesResultProcessorService }
	from './result-processor/get-library-images-result-processor.service';
import { GetLibraryImagesResultCheckService }
	from './data-transport-result-check/get-library-images-result-check.service';


@Injectable({
	providedIn: 'root'
})
export class GetLibraryImagesResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__getLibraryImagesResultCheck: GetLibraryImagesResultCheckService,
		__getLibraryImagesResultProcessor: GetLibraryImagesResultProcessorService
	) {
		super(
			__getLibraryImagesResultCheck,
			__getLibraryImagesResultProcessor
		);
	}

}
