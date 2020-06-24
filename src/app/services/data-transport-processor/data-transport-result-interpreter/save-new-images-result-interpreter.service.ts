import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { SaveNewImagesResultProcessorService }
	from './run-tasks-needed-after-successful-result/save-new-images-result-processor.service';
import { SaveNewImagesResultCheckService }
	from './data-transport-result-check/save-new-images-result-check.service';


@Injectable({providedIn: 'root'})

export class SaveNewImagesResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__saveNewImagesResultCheck: SaveNewImagesResultCheckService,
		__saveNewImagesResultProcessor: SaveNewImagesResultProcessorService
	) {
		super(__saveNewImagesResultCheck, __saveNewImagesResultProcessor);
	}

}
