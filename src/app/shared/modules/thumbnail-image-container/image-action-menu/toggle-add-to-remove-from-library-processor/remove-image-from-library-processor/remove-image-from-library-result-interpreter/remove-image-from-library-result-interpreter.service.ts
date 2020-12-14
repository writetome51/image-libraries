import { DataTransportResultInterpreterService }
	from '@data-transport-result-interpreter/data-transport-result-interpreter.service';
import { Injectable } from '@angular/core';
import { RemoveImageFromLibraryResultCheckService }
	from './remove-image-from-library-result-check.service';
import { RunTasksAfterAddingOrRemovingImageFromLibraryService }
	from '../../run-tasks-after-adding-or-removing-image-from-library.service';


@Injectable({providedIn: 'root'})
export class RemoveImageFromLibraryResultInterpreterService
	extends DataTransportResultInterpreterService {

	constructor(
		__resultCheck: RemoveImageFromLibraryResultCheckService,
		__runPostSuccessTasks: RunTasksAfterAddingOrRemovingImageFromLibraryService
	) {
		super(__resultCheck, __runPostSuccessTasks);
	}

}
