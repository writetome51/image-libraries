import { DataTransportProcessorService } from '../data-transport-processor.service';
import { Injectable } from '@angular/core';
import { GetImageTotalService } from './get-image-total.service';
import { GetImageTotalResultInterpreterService }
	from './get-image-total-result-interpreter/get-image-total-result-interpreter.service';


// Even though this class is abstract, we need @Injectable decorator here
// so its subclasses don't have to redeclare the constructor.

@Injectable({providedIn: 'root'})
export abstract class GetImageTotalProcessorService extends DataTransportProcessorService {

	constructor(
		protected _getImageTotal: GetImageTotalService,
		__getImagesResultInterpreter: GetImageTotalResultInterpreterService
	) {
		super(__getImagesResultInterpreter);
	}

}
