import { Injectable } from '@angular/core';
import { GetLibraryImageTotalService } from './get-library-image-total.service';
import { ProcessGetImageTotalService }
	from '@process-get-image-total/process-get-image-total.abstract.service';
import { InterpretGetLibraryImageTotalResultService } from
		'./interpret-get-library-image-total-result_service/interpret-get-library-image-total-result.service';


@Injectable({providedIn: 'root'})
export class ProcessGetLibraryImageTotalService extends ProcessGetImageTotalService {

	constructor(
		__getResult: GetLibraryImageTotalService,
		__interpretResult: InterpretGetLibraryImageTotalResultService
	) {
		super(__getResult, __interpretResult);
	}

}
