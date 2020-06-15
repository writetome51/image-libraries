import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { DataTransportResultCheckService }
	from './data-transport-result-check/data-transport-result-check.service';
import { DeleteSelectedImagesResultProcessorService }
	from './result-processor/delete-selected-images-result-processor.service';


@Injectable({providedIn: 'root'})

export class DeleteSelectedImagesResultInterpreterService
	extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheckService: DataTransportResultCheckService,
		__deleteSelectedImagesResultProcessor: DeleteSelectedImagesResultProcessorService
	) {
		super(__dataTransportResultCheckService, __deleteSelectedImagesResultProcessor);
	}

}
