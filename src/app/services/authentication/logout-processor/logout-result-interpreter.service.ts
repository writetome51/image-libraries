import { Injectable } from '@angular/core';
import { DataOperationResultService } from '../../data-operation-result/data-operation-result.service';
import { UserLogoutOrDeletionResultProcessorService }
	from '../../user/user-logout-or-deletion-result-processor.service';
import { ResultInterpreterService } from '../../result-interpreter.service';


@Injectable({
	providedIn: 'root'
})
export class LogoutResultInterpreterService extends ResultInterpreterService {

	constructor(
		__dataOperationResult: DataOperationResultService,
		__logoutResultProcessor: UserLogoutOrDeletionResultProcessorService
	) {
		super(__dataOperationResult, __logoutResultProcessor);
	}

}
