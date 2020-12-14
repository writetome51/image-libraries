import { Injectable } from '@angular/core';
import { ProcessResultInterpreterService } from '@services/process-result-interpreter.service';
import { RunTasksAfterToggleAddToRemoveFromLibraryService }
	from './run-tasks-after-toggle-add-to-remove-from-library.service';
import { ToggleAddToRemoveFromLibraryResultCheckService }
	from './toggle-add-to-remove-from-library-result-check.service';


@Injectable({providedIn: 'root'})
export class ToggleAddToRemoveFromLibraryResultInterpreterService
	extends ProcessResultInterpreterService {

	constructor(
		__resultCheck: ToggleAddToRemoveFromLibraryResultCheckService,
		__runPostSuccessTasks: RunTasksAfterToggleAddToRemoveFromLibraryService
	) {
		super(__resultCheck, __runPostSuccessTasks);
	}

}
