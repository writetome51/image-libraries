import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { RunTasksNeededAfterSuccessfulSavingNewImagesService }
	from './run-tasks-needed-after-successful-result/run-tasks-needed-after-successful-saving-new-images.service';
import { SaveNewImagesResultCheckService }
	from './data-transport-result-check/save-new-images-result-check.service';


@Injectable({providedIn: 'root'})

export class SaveNewImagesResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__saveNewImagesResultCheck: SaveNewImagesResultCheckService,
		__runTasksNeededAfterSuccessfulResult: RunTasksNeededAfterSuccessfulSavingNewImagesService
	) {
		super(__saveNewImagesResultCheck, __runTasksNeededAfterSuccessfulResult);
	}

}
