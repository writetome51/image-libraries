import { Injectable } from '@angular/core';
import { GetUserImageTotalService } from './get-user-image-total.service';
import { InterpretGetUserImageTotalResultService }
	from './get-user-image-total-result-interpreter/interpret-get-user-image-total-result.service';
import { GetImageTotalProcessorService } from '../get-image-total-processor.service';


@Injectable({providedIn: 'root'})
export class GetUserImageTotalProcessorService extends GetImageTotalProcessorService {

	constructor(
		__getResult: GetUserImageTotalService,
		__interpretResult: InterpretGetUserImageTotalResultService
	) {
		super(__getResult, __interpretResult);
	}

}
