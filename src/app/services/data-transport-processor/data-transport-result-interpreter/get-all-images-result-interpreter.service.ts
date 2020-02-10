import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { DataTransportResultCheckService }
	from './data-transport-result-check/data-transport-result-check.service';
import { GetAllImagesResultProcessorService }
	from './result-processor/get-all-images-result-processor.service';


@Injectable({
	providedIn: 'root'
})
export class GetAllImagesResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheck: DataTransportResultCheckService,
		__getAllImagesResultProcessor: GetAllImagesResultProcessorService
	) {
		super(
			__dataTransportResultCheck,
			__getAllImagesResultProcessor
		);
	}

}
