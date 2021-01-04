import { DataTransportProcessResultInterpreterService }
	from '../../../../../shared/services/data-transport-processor/data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { GetLibraryResultCheckService } from './get-library-result-check.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterGettingLibraryService }
	from './run-tasks-after-getting-library/run-tasks-after-getting-library.service';


@Injectable({providedIn: 'root'})
export class GetLibraryResultInterpreterService extends DataTransportProcessResultInterpreterService {

	constructor(
		__dataTransportResultCheck: GetLibraryResultCheckService,
		__runPostSuccessTasks: RunTasksAfterGettingLibraryService,
	) {
		super(__dataTransportResultCheck, __runPostSuccessTasks);
	}

}
