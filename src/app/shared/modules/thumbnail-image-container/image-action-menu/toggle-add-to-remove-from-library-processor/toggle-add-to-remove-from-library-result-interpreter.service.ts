import { Injectable } from '@angular/core';
import { ToggleAddToRemoveFromLibraryResultCheckService }
	from './toggle-add-to-remove-from-library-result-check.service';
import { RunTasksNeededAfterToggleAddToRemoveFromLibraryService }
	from './run-tasks-needed-after-toggle-add-to-remove-from-library.service';
import { ProcessResultInterpreterService } from '@services/process-result-interpreter.service';


@Injectable({providedIn: 'root'})

export class ToggleAddToRemoveFromLibraryResultInterpreterService
	extends ProcessResultInterpreterService {

	constructor(
		__resultCheck: ToggleAddToRemoveFromLibraryResultCheckService,
		__runPostSuccessTasks: RunTasksNeededAfterToggleAddToRemoveFromLibraryService
	) {
		super(__resultCheck, __runPostSuccessTasks);
	}

}
