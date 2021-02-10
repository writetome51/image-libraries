import { Injectable } from '@angular/core';
import { GetLibraryImageTotalService } from './get-library-image-total.service';
import { GetImageTotalProcessorService } from '../get-image-total-processor.service';
import { GetLibraryImageTotalResultInterpreterService }
	from './get-library-image-total-result-interpreter/get-library-image-total-result-interpreter.service';


@Injectable({providedIn: 'root'})
export class GetLibraryImageTotalProcessorService extends GetImageTotalProcessorService {

	constructor(
		__getResult: GetLibraryImageTotalService,
		__resultInterpreter: GetLibraryImageTotalResultInterpreterService
	) {
		super(__getResult, __resultInterpreter);
	}

}
