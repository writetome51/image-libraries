import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { LogoutService } from './logout.service';
import { Injectable } from '@angular/core';
import { LogoutResultInterpreterService } from './logout-result-interpreter.service';


@Injectable({providedIn: 'root'})
export class LogoutProcessorService extends DataTransportProcessorService {

	constructor(
		__getResult: LogoutService,
		__resultInterpreter: LogoutResultInterpreterService
	) {
		super(__getResult, __resultInterpreter);
	}

}