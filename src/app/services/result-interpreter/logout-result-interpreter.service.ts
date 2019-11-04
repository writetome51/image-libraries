import { Injectable } from '@angular/core';
import { UserLogoutOrDeletionResultProcessorService }
	from '../user/user-logout-or-deletion-result-processor.service';
import { ResultInterpreterService } from './result-interpreter.service';
import { LogoutResultCheckService } from '../data-operation-result-check/logout-result-check.service';


@Injectable({
	providedIn: 'root'
})
export class LogoutResultInterpreterService extends ResultInterpreterService {

	constructor(
		__logoutResultCheck: LogoutResultCheckService,
		__logoutResultProcessor: UserLogoutOrDeletionResultProcessorService
	) {
		super(__logoutResultCheck, __logoutResultProcessor);
	}

}
