import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { Injectable } from '@angular/core';
import { SaveNewImagesService } from '../save-new-images.service';
import { SaveNewImagesResultInterpreterService }
	from '../save-new-images-result-interpreter/save-new-images-result-interpreter.service';


@Injectable({providedIn: 'root'})
export class SaveNewImagesProcessorService extends DataTransportProcessorService {

	constructor(
		__getResult: SaveNewImagesService,
		__resultInterpreter: SaveNewImagesResultInterpreterService
	) {
		super(__getResult, __resultInterpreter);
	}

}
