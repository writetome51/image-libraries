import { HandleGetImageTotalErrorService }
	from '../../handle-get-image-total-error.service';
import { Injectable } from '@angular/core';
import { InterpretGetImageTotalResultService }
	from '../../interpret-get-image-total-result.abstract.service';
import { RunTasksAfterGettingLibraryImageTotalService }
	from './run-tasks-after-getting-library-image-total.service';


@Injectable({providedIn: 'root'})
export class InterpretGetLibraryImageTotalResultService
	extends InterpretGetImageTotalResultService {

	constructor(
		__handleError: HandleGetImageTotalErrorService,
		__runPostSuccessTasks: RunTasksAfterGettingLibraryImageTotalService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
