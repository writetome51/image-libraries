import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { UpdatePasswordResultProcessorService }
	from './result-processor/update/update-password-result-processor.service';
import { DataTransportResultCheckService }
	from './data-transport-result-check/data-transport-result-check.service';


@Injectable({providedIn: 'root'})

export class UpdatePasswordResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheck: DataTransportResultCheckService,
		__updatePasswordResultProcessor: UpdatePasswordResultProcessorService
	) {
		super(
			__dataTransportResultCheck,
			__updatePasswordResultProcessor
		);
	}

}
