import { DataTransportProcessResultInterpreterService }
	from '../../../../../../services/data-transport-processor/data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { Injectable } from '@angular/core';
import { RemoveImageFromLibraryResultCheckService }
	from './remove-image-from-library-result-check.service';
import { RunTasksAfterAddingOrRemovingImageFromLibraryService }
	from '../../run-tasks-after-adding-or-removing-image-from-library.service';


@Injectable({providedIn: 'root'})
export class RemoveImageFromLibraryResultInterpreterService
	extends DataTransportProcessResultInterpreterService {

	constructor(
		__resultCheck: RemoveImageFromLibraryResultCheckService,
		__runPostSuccessTasks: RunTasksAfterAddingOrRemovingImageFromLibraryService
	) {
		super(__resultCheck, __runPostSuccessTasks);
	}

}
