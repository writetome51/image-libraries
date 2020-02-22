import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { DataTransportResultCheckService }
	from './data-transport-result-check/data-transport-result-check.service';
import { GetLibraryImagesResultProcessorService }
	from './result-processor/get-library-images-result-processor.service';


@Injectable({
	providedIn: 'root'
})
export class GetLibraryImagesResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheck: DataTransportResultCheckService,
		__getLibraryImagesResultProcessor: GetLibraryImagesResultProcessorService
	) {
		super(
			__dataTransportResultCheck,
			__getLibraryImagesResultProcessor
		);
	}

}
