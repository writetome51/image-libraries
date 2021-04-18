import { GetUserImageTotalService } from './get-user-image-total.service';
import { Injectable } from '@angular/core';
import { InterpretGetUserImageTotalResultService } from
'./interpret-get-user-image-total-result_service/interpret-get-user-image-total-result.service';
import { ProcessExistingUserDBOperationService } from '@process/process-existing-user-db-operation.abstract.service';


@Injectable({providedIn: 'root'})
export class ProcessGetUserImageTotalService extends ProcessExistingUserDBOperationService {

	constructor(
		__getResult: GetUserImageTotalService,
		__interpretResult: InterpretGetUserImageTotalResultService
	) {
		super(__getResult, __interpretResult);
	}

}
