import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService }	// tslint:disable-next-line:max-line-length
	from '../../../../../shared/services/data-transport-processor/data-transport-result-interpreter/data-transport-result-interpreter.service';
import { RunTasksNeededAfterGettingLibraryService }
	from './run-tasks-needed-after-getting-library/run-tasks-needed-after-getting-library.service';
import { GetLibraryResultCheckService }
	from './get-library-result-check.service';


@Injectable({providedIn: 'root'})

export class GetLibraryResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__getLibraryResultCheck: GetLibraryResultCheckService,
		__runTasksNeededAfterSuccessfulProcess: RunTasksNeededAfterGettingLibraryService,
	) {
		super(__getLibraryResultCheck, __runTasksNeededAfterSuccessfulProcess);
	}

}
