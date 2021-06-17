import { GetLibrariesService } from '@db/get-libraries.service';
import { InterpretGetLibrariesResultService }
	from './interpret-get-libraries-result_service/interpret-get-libraries-result.service';
import { Injectable } from '@angular/core';
import { ProcessExistingUserDBOperationService }
	from '../process-existing-user-db-operation.abstract.service';


@Injectable({providedIn: 'root'})
export class ProcessGetLibrariesService extends ProcessExistingUserDBOperationService {

	constructor(
		__getResult: GetLibrariesService,
		__interpretResult: InterpretGetLibrariesResultService
	) {
		super(__getResult, __interpretResult);
	}

}
