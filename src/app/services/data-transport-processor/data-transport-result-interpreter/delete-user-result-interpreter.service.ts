import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { DeleteUserResultProcessorService }
	from './result-processor/delete-user-result-processor.service';
import { DataTransportResultCheckService }
	from './data-transport-result-check/data-transport-result-check.service';


@Injectable({providedIn: 'root'})

export class DeleteUserResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheckService: DataTransportResultCheckService,
		__deleteUserResultProcessor: DeleteUserResultProcessorService
	) {
		super(__dataTransportResultCheckService, __deleteUserResultProcessor);
	}

}
