import { AddImageToLibraryResultCheckService } from './add-image-to-library-result-check.service';
import { DataTransportResultInterpreterService }
	from '@data-transport-result-interpreter/data-transport-result-interpreter.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterAddingOrRemovingImageFromLibraryService }
	from '../../run-tasks-after-adding-or-removing-image-from-library.service';


@Injectable({providedIn: 'root'})

export class AddImageToLibraryResultInterpreterService
	extends DataTransportResultInterpreterService {

	constructor(
		__resultCheck: AddImageToLibraryResultCheckService,
		__runPostSuccessTasks: RunTasksAfterAddingOrRemovingImageFromLibraryService
	) {
		super(__resultCheck, __runPostSuccessTasks);
	}

}
