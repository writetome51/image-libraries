import { Injectable } from '@angular/core';
import { GetLibraryImageTotalService } from './get-library-image-total.service';
import { GetImageTotalProcessorService } from '../get-image-total-processor.service';
import { InterpretGetLibraryImageTotalResultService }
	from './get-library-image-total-result-interpreter/interpret-get-library-image-total-result.service';


@Injectable({providedIn: 'root'})
export class GetLibraryImageTotalProcessorService extends GetImageTotalProcessorService {

	constructor(
		__getResult: GetLibraryImageTotalService,
		__interpretResult: InterpretGetLibraryImageTotalResultService
	) {
		super(__getResult, __interpretResult);
	}

}
