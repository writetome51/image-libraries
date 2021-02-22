import { Injectable } from '@angular/core';
import { GetLibraryImageTotalService } from './get-library-image-total.service';
import { GetImageTotalProcessorService } from '../get-image-total-processor.abstract.service';
import { InterpretGetLibraryImageTotalResultService }
	from './interpret-get-library-image-total-result/interpret-get-library-image-total-result.service';


@Injectable({providedIn: 'root'})
export class GetLibraryImageTotalProcessorService extends GetImageTotalProcessorService {

	constructor(
		__getResult: GetLibraryImageTotalService,
		__interpretResult: InterpretGetLibraryImageTotalResultService
	) {
		super(__getResult, __interpretResult);
	}

}
