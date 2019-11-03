import { Injectable } from '@angular/core';
import { UserLogoutOrDeletionResultProcessorService }
	from '../../user/user-logout-or-deletion-result-processor.service';
import { ResultInterpreterService } from '../../result-interpreter.service';
import { LogoutResultService } from './logout-result.service';


@Injectable({
	providedIn: 'root'
})
export class LogoutResultInterpreterService extends ResultInterpreterService {

	constructor(
		__logoutResult: LogoutResultService,
		__logoutResultProcessor: UserLogoutOrDeletionResultProcessorService
	) {
		super(__logoutResult, __logoutResultProcessor);
	}

}
