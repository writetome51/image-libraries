import { Injectable } from '@angular/core';
import { GetUserImageTotalService } from './get-user-image-total.service';
import { InterpretGetUserImageTotalResultService }
	from './interpret-get-user-image-total-result/interpret-get-user-image-total-result.service';
import { ProcessGetImageTotalService } from '../process-get-image-total.abstract.service';


@Injectable({providedIn: 'root'})
export class ProcessGetUserImageTotalService extends ProcessGetImageTotalService {

	constructor(
		__getResult: GetUserImageTotalService,
		__interpretResult: InterpretGetUserImageTotalResultService
	) {
		super(__getResult, __interpretResult);
	}

}
