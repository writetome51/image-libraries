import { Injectable } from '@angular/core';
import { UserLogoutResultProcessorService }
	from './result-processor/user-logout-result-processor.service';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { LogoutResultCheckService } from './data-transport-result-check/logout-result-check.service';


@Injectable({
	providedIn: 'root'
})
export class LogoutResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__logoutResultCheck: LogoutResultCheckService,
		__logoutResultProcessor: UserLogoutResultProcessorService
	) {
		super(__logoutResultCheck, __logoutResultProcessor);
	}

}
