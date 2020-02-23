import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { LoginResultProcessorService } from './result-processor/login-result-processor.service';
import { DataTransportResultCheckService }
	from './data-transport-result-check/data-transport-result-check.service';


@Injectable({providedIn: 'root'})

export class LoginResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheck: DataTransportResultCheckService,
		__loginResultProcessor: LoginResultProcessorService
	) {
		super(__dataTransportResultCheck, __loginResultProcessor);
	}

}
