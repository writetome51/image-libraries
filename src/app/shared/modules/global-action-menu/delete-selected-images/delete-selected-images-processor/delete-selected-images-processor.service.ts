import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { DeleteSelectedImagesResultInterpreterService }
	from './delete-selected-images-result-interpreter.service';
import { Injectable } from '@angular/core';
import { DeleteSelectedImagesService } from './delete-selected-images.service';


@Injectable()
export class DeleteSelectedImagesProcessorService extends DataTransportProcessorService {

	constructor(
		__getResult: DeleteSelectedImagesService,
		__resultInterpreter: DeleteSelectedImagesResultInterpreterService
	) {
		super(__getResult, __resultInterpreter);
	}

}
