import { Injectable } from '@angular/core';
import { GetUserImageTotalService } from './get-user-image-total.service';
import { InterpretGetUserImageTotalResultService }
	from './interpret-get-user-image-total-result/interpret-get-user-image-total-result.service';
import { GetImageTotalProcessorService } from '../get-image-total-processor.abstract.service';


@Injectable({providedIn: 'root'})
export class GetUserImageTotalProcessorService extends GetImageTotalProcessorService {

	constructor(
		__getResult: GetUserImageTotalService,
		__interpretResult: InterpretGetUserImageTotalResultService
	) {
		super(__getResult, __interpretResult);
	}

}
