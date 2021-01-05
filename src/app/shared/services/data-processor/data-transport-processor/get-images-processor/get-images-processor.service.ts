import { DataTransportProcessorService } from '../data-transport-processor.service';
import { GetImagesFromStorageService } from './get-images-from-storage.service';
import { GetImagesResultInterpreterService }
	from './get-images-result-interpreter/get-images-result-interpreter.service';
import { Injectable } from '@angular/core';


// Even though this class is abstract, we need @Injectable decorator here
// so its subclasses don't have to redeclare the constructor.

@Injectable({providedIn: 'root'})
export abstract class GetImagesProcessorService extends DataTransportProcessorService {

	constructor(
		protected _getImagesFromStorage: GetImagesFromStorageService,
		__getImagesResultInterpreter: GetImagesResultInterpreterService
	) {
		super(__getImagesResultInterpreter);
	}

}
