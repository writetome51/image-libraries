import { Injectable } from '@angular/core';
import { UserLogoutResultProcessorService }
	from './result-processor/user-logout-result-processor.service';
import { ResultInterpreterService } from './result-interpreter.service';
import { LogoutResultCheckService } from './data-process-result-check/logout-result-check.service';


@Injectable({
	providedIn: 'root'
})
export class LogoutResultInterpreterService extends ResultInterpreterService {

	constructor(
		__logoutResultCheck: LogoutResultCheckService,
		__logoutResultProcessor: UserLogoutResultProcessorService
	) {
		super(__logoutResultCheck, __logoutResultProcessor);
	}

}
