import { ProcessDbOperationService } from '../process-db-operation.abstract.service';
import { InterpretGetLibrariesResultService }
	from './interpret-get-libraries-result_service/interpret-get-libraries-result.service';
import { Injectable } from '@angular/core';
import { GetUserLibrariesService } from '@db/get-user-libraries.service';


@Injectable({providedIn: 'root'})
export class ProcessGetLibrariesService extends ProcessDbOperationService {

	constructor(
		__getResult: GetUserLibrariesService,
		__interpretResult: InterpretGetLibrariesResultService
	) {
		super(__getResult, __interpretResult);
	}

}
