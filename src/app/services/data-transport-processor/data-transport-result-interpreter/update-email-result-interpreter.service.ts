import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { UpdateEmailResultProcessorService }
	from './result-processor/update-email-result-processor.service';
import { DataTransportResultCheckService }
	from './data-transport-result-check/data-transport-result-check.service';


@Injectable({providedIn: 'root'})

export class UpdateEmailResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheck: DataTransportResultCheckService,
		__updateEmailResultProcessor: UpdateEmailResultProcessorService
	) {
		super(
			__dataTransportResultCheck,
			__updateEmailResultProcessor
		);
	}

}
