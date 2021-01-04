import { Injectable } from '@angular/core';
import { DataProcessResultInterpreterService } from '@services/data-process-result-interpreter.service';
import { RunTasksAfterToggleAddToRemoveFromLibraryService }
	from './run-tasks-after-toggle-add-to-remove-from-library.service';
import { ToggleAddToRemoveFromLibraryResultCheckService }
	from './toggle-add-to-remove-from-library-result-check.service';


@Injectable({providedIn: 'root'})
export class ToggleAddToRemoveFromLibraryResultInterpreterService
	extends DataProcessResultInterpreterService {

	constructor(
		__resultCheck: ToggleAddToRemoveFromLibraryResultCheckService,
		__runPostSuccessTasks: RunTasksAfterToggleAddToRemoveFromLibraryService
	) {
		super(__resultCheck, __runPostSuccessTasks);
	}

}
