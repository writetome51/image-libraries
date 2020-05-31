import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { GetImagesResultProcessorService }
	from './result-processor/get-images-result-processor.service';
import { GetImagesResultCheckService }
	from './data-transport-result-check/get-images-result-check.service';


@Injectable({
	providedIn: 'root'
})
export class GetImagesResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__getImagesResultCheck: GetImagesResultCheckService,
		__getImagesResultProcessor: GetImagesResultProcessorService
	) {
		super(
			__getImagesResultCheck,
			__getImagesResultProcessor
		);
	}

}
