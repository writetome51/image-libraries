import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService }
	from '../../../../services/data-transport-processor/data-transport-result-interpreter/data-transport-result-interpreter.service';
import { RunTasksNeededAfterSuccessfulGettingLibraryService }
	from './run-tasks-needed-after-successful-getting-library.service';
import { GetLibraryResultCheckService }
	from './get-library-result-check.service';


@Injectable({providedIn: 'root'})

export class GetLibraryResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__getLibraryResultCheck: GetLibraryResultCheckService,
		__runTasksNeededAfterSuccessfulResult: RunTasksNeededAfterSuccessfulGettingLibraryService,
	) {
		super(__getLibraryResultCheck, __runTasksNeededAfterSuccessfulResult);
	}

}
