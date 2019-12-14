import { NewUserResultCheckService } from './data-transport-result-check/new-user-result-check.service';
import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { NewUserResultProcessorService } from './result-processor/new-user-result-processor.service';


@Injectable({
	providedIn: 'root'
})
export class NewUserResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__newUserResultCheck: NewUserResultCheckService,
		__newUserResultProcessor: NewUserResultProcessorService,
	) {
		super(__newUserResultCheck, __newUserResultProcessor);
	}

}
