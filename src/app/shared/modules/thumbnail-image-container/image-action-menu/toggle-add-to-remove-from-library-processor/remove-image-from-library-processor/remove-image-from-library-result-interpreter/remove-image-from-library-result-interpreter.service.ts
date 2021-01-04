import { DataTransportProcessResultInterpreterService }
	from '@data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { Injectable } from '@angular/core';
import { HandleRemoveImageFromLibraryErrorService }
	from './handle-remove-image-from-library-error.service';
import { RunTasksAfterAddingOrRemovingImageFromLibraryService }
	from '../../run-tasks-after-adding-or-removing-image-from-library.service';


@Injectable({providedIn: 'root'})
export class RemoveImageFromLibraryResultInterpreterService
	extends DataTransportProcessResultInterpreterService {

	constructor(
		____handleError: HandleRemoveImageFromLibraryErrorService,
		__runPostSuccessTasks: RunTasksAfterAddingOrRemovingImageFromLibraryService
	) {
		super(____handleError, __runPostSuccessTasks);
	}

}
