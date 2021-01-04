import { AddImageToLibraryResultCheckService } from './add-image-to-library-result-check.service';
import { DataTransportProcessResultInterpreterService }
	from '../../../../../../services/data-transport-processor/data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterAddingOrRemovingImageFromLibraryService }
	from '../../run-tasks-after-adding-or-removing-image-from-library.service';


@Injectable({providedIn: 'root'})
export class AddImageToLibraryResultInterpreterService
	extends DataTransportProcessResultInterpreterService {

	constructor(
		__handleError: AddImageToLibraryResultCheckService,
		__runPostSuccessTasks: RunTasksAfterAddingOrRemovingImageFromLibraryService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
