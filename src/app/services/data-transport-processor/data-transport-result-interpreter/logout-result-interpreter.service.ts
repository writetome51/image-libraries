import { Injectable } from '@angular/core';
import { LogoutResultProcessorService }
	from './result-processor/logout-result-processor.service';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { DataTransportResultCheckService }
	from './data-transport-result-check/data-transport-result-check.service';


@Injectable({
	providedIn: 'root'
})
export class LogoutResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheck: DataTransportResultCheckService,
		__logoutResultProcessor: LogoutResultProcessorService
	) {
		super(__dataTransportResultCheck, __logoutResultProcessor);
	}

}
