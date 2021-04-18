import { Injectable } from '@angular/core';
import { InterpretResultService } from '@interpret-result/interpret-result.abstract.service';
import { HandleStoreImageFilesErrorService } from './handle-store-image-files-error.service';
import { RunTasksAfterStoringImageFilesService }
	from './run-tasks-after-storing-image-files.service';


@Injectable({providedIn: 'root'})
export class InterpretStoreImageFilesResultService extends InterpretResultService {

	constructor(
		__handleError: HandleStoreImageFilesErrorService,
		__runPostSuccessTasks: RunTasksAfterStoringImageFilesService
	) {
		super(__handleError, __runPostSuccessTasks);
	}
}
