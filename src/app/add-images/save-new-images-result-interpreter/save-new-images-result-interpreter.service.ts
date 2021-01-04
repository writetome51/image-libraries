import { DataTransportProcessResultInterpreterService }
	from '@data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterSavingNewImagesService } from './run-tasks-after-saving-new-images.service';
import { HandleSaveNewImagesErrorService } from './handle-save-new-images-error.service';


@Injectable({providedIn: 'root'})
export class SaveNewImagesResultInterpreterService
	extends DataTransportProcessResultInterpreterService {

	constructor(
		__handleError: HandleSaveNewImagesErrorService,
		__runPostSuccessTasks: RunTasksAfterSavingNewImagesService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
