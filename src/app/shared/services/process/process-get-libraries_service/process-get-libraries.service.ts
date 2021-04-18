import { ProcessExistingUserDBOperationService } from '../process-existing-user-db-operation.abstract.service';
import { InterpretGetLibrariesResultService }
	from './interpret-get-libraries-result_service/interpret-get-libraries-result.service';
import { Injectable } from '@angular/core';
import { GetUserLibrariesService } from '@db/get-user-libraries.service';


@Injectable({providedIn: 'root'})
export class ProcessGetLibrariesService extends ProcessExistingUserDBOperationService {

	constructor(
		__getResult: GetUserLibrariesService,
		__interpretResult: InterpretGetLibrariesResultService
	) {
		super(__getResult, __interpretResult);
	}

}
