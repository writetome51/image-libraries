import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { GetImagesResultCheckService }
	from './data-transport-result-check/get-images-result-check.service';
import { GetImagesTotalResultProcessorService }
	from './result-processor/get-images-total-result-processor.service';


@Injectable({providedIn: 'root'})

export class GetImagesTotalResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__getImagesResultCheck: GetImagesResultCheckService,
		__getImagesTotalResultProcessor: GetImagesTotalResultProcessorService
	) {
		super(
			__getImagesResultCheck,
			__getImagesTotalResultProcessor
		);
	}

}
