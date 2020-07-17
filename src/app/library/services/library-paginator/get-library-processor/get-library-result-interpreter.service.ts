import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService }
	from '../../../../services/data-transport-processor/data-transport-result-interpreter/data-transport-result-interpreter.service';
import { RunTasksNeededAfterSuccessfulGettingLibraryService }
	from '../../../../services/data-transport-processor/data-transport-result-interpreter/run-tasks-needed-after-successful-result/get/run-tasks-needed-after-successful-getting-library.service';
import { GetLibraryResultCheckService }
	from '../../../../services/data-transport-processor/data-transport-result-interpreter/data-transport-result-check/get-library-result-check.service';


@Injectable({providedIn: 'root'})

export class GetLibraryResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__getLibraryResultCheck: GetLibraryResultCheckService,
		__runTasksNeededAfterSuccessfulResult: RunTasksNeededAfterSuccessfulGettingLibraryService,
	) {
		super(__getLibraryResultCheck, __runTasksNeededAfterSuccessfulResult);
	}

}
