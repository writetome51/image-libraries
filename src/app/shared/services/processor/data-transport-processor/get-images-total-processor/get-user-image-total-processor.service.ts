import { DataTransportProcessorService } from '../data-transport-processor.service';
import { Injectable } from '@angular/core';
import { GetImageTotalResultInterpreterService }
	from './get-images-total-result-interpreter/get-image-total-result-interpreter.service';
import { GetUserImageTotalService }
	from '@get-images-total-processor/get-user-image-total.service';


// Even though this class is abstract, we need @Injectable decorator here
// so its subclasses don't have to redeclare the constructor.

@Injectable({providedIn: 'root'})
export class GetUserImageTotalProcessorService extends DataTransportProcessorService {

	constructor(
		protected _getImagesTotal: GetUserImageTotalService,
		__resultInterpreter: GetImageTotalResultInterpreterService
	) {
		super(__resultInterpreter);
	}


	protected _getResult(): any {
	}

}
