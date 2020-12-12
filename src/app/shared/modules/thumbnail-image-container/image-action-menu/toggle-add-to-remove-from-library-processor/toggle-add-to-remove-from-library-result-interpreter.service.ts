import { Injectable } from '@angular/core';
import { ToggleAddToRemoveFromLibraryResultCheckService }
	from '@thumbnail-image-container/image-action-menu/toggle-add-to-remove-from-library-processor/toggle-add-to-remove-from-library-result-check.service';
import { RunTasksNeededAfterToggleAddToRemoveFromLibraryService }
	from '@thumbnail-image-container/image-action-menu/toggle-add-to-remove-from-library-processor/run-tasks-needed-after-toggle-add-to-remove-from-library.service';
import { Interpreter } from '@interfaces/interpreter';
import { hasValue } from '@writetome51/has-value-no-value';


@Injectable({providedIn: 'root'})

export class ToggleAddToRemoveFromLibraryResultInterpreterService implements Interpreter {

	constructor(
		private __resultCheck: ToggleAddToRemoveFromLibraryResultCheckService,
		private __runPostSuccessTasks: RunTasksNeededAfterToggleAddToRemoveFromLibraryService
	) {
	}


	interpret(result): void {
		result = this.__resultCheck.returnIfNoError(result);
		if (hasValue(result)) this.__runPostSuccessTasks.go(result);
	}

}
