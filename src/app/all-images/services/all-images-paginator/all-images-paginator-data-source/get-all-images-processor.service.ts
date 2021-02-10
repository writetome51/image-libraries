import { Injectable } from '@angular/core';
import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { GetImagesResultInterpreterService }
	from '@get-images-processor/get-images-result-interpreter/get-images-result-interpreter.service';
import { GetAllImagesService } from './get-all-images.service';


@Injectable({providedIn: 'root'})
export class GetAllImagesProcessorService extends DataTransportProcessorService {

	constructor(
		__getResult: GetAllImagesService,
		__resultInterpreter: GetImagesResultInterpreterService
	) {
		super(__getResult, __resultInterpreter);
	}

}
