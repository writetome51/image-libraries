import { Injectable } from '@angular/core';
import { OperationRequiringEmailPasswordResultCheckService }
	from './data-transport-result-check/operation-requiring-email-password-result-check.service';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { DeleteUserResultProcessorService }
	from './result-processor/delete-user-result-processor.service';


@Injectable({providedIn: 'root'})

export class DeleteUserResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__deleteUserResultCheck: OperationRequiringEmailPasswordResultCheckService,
		__deleteUserResultProcessor: DeleteUserResultProcessorService
	) {
		super(__deleteUserResultCheck, __deleteUserResultProcessor);
	}

}
