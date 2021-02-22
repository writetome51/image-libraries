import { Injectable } from '@angular/core';
import { InterpretDataTransportResultService }
	from '@processor/../../interpret-result/interpret-data-transport-result/interpret-data-transport-result.service';
import { RunTasksAfterGettingLibrariesService } from './run-tasks-after-getting-libraries.service';
import { HandleDataTransportErrorService } from '@services/processor-related/../../handle-data-transport-error/handle-data-transport-error.service';


@Injectable({providedIn: 'root'})
export class InterpretGetLibrariesResultService extends InterpretDataTransportResultService {

	constructor(
		__handleError: HandleDataTransportErrorService,
		__runPostSuccessTasks: RunTasksAfterGettingLibrariesService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
