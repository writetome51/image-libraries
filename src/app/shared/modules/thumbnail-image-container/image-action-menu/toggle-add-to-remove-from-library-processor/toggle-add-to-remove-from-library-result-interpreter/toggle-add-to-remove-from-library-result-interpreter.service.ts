import { Injectable } from '@angular/core';
import { ProcessResultInterpreterService }
	from 'processor/process-result-interpreter.service';
import { RunTasksAfterToggleAddToRemoveFromLibraryService }
	from './run-tasks-after-toggle-add-to-remove-from-library.service';
import { HandleToggleAddToRemoveFromLibraryErrorService }
	from './handle-toggle-add-to-remove-from-library-error.service';


@Injectable({providedIn: 'root'})
export class ToggleAddToRemoveFromLibraryResultInterpreterService
	extends ProcessResultInterpreterService {

	constructor(
		__handleError: HandleToggleAddToRemoveFromLibraryErrorService,
		__runPostSuccessTasks: RunTasksAfterToggleAddToRemoveFromLibraryService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
