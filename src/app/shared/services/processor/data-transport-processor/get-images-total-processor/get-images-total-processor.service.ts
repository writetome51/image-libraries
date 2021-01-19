import { DataTransportProcessorService } from '../data-transport-processor.service';
import { Injectable } from '@angular/core';
import { GetImagesTotalService } from './get-images-total.service';
import { GetImagesTotalResultInterpreterService }
	from './get-images-total-result-interpreter/get-images-total-result-interpreter.service';


// Even though this class is abstract, we need @Injectable decorator here
// so its subclasses don't have to redeclare the constructor.

@Injectable({providedIn: 'root'})
export abstract class GetImagesTotalProcessorService extends DataTransportProcessorService {

	constructor(
		protected _getImagesTotal: GetImagesTotalService,
		__resultInterpreter: GetImagesTotalResultInterpreterService
	) {
		super(__resultInterpreter);
	}

}
