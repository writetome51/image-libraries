import { AddImageToLibraryResultCheckService } from './add-image-to-library-result-check.service';
import { DataTransportResultInterpreterService }
	from '@data-transport-result-interpreter/data-transport-result-interpreter.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterAddingImageToLibraryService }
	from './run-tasks-after-adding-image-to-library.service';


@Injectable({providedIn: 'root'})

export class AddImageToLibraryResultInterpreterService
	extends DataTransportResultInterpreterService {

	constructor(
		__resultCheck: AddImageToLibraryResultCheckService,
		__runPostSuccessTasks: RunTasksAfterAddingImageToLibraryService
	) {
		super(__resultCheck, __runPostSuccessTasks);
	}

}
