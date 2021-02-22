import { Injectable } from '@angular/core';
import { InterpretDataTransportResultService }
	from '../../interpret-result/interpret-data-transport-result/interpret-data-transport-result.service';
import { RunTasksAfterGettingLibrariesService } from './run-tasks-after-getting-libraries.service';
import { HandleDataTransportErrorService } from '@data-transport-processor/../../handle-data-transport-error/handle-data-transport-error.service';


@Injectable({providedIn: 'root'})
export class InterpretGetLibrariesResultService extends InterpretDataTransportResultService {

	constructor(
		__handleError: HandleDataTransportErrorService,
		__runPostSuccessTasks: RunTasksAfterGettingLibrariesService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
