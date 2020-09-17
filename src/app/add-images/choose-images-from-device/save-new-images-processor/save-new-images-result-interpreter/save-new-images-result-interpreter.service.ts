import { DataTransportResultInterpreterService }
	from '@data-transport-result-interpreter/data-transport-result-interpreter.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterSavingNewImagesService } from './run-tasks-after-saving-new-images.service';
import { SaveNewImagesResultCheckService } from './save-new-images-result-check.service';


@Injectable({providedIn: 'root'})

export class SaveNewImagesResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__saveNewImagesResultCheck: SaveNewImagesResultCheckService,
		__runPostSuccessTasks: RunTasksAfterSavingNewImagesService
	) {
		super(__saveNewImagesResultCheck, __runPostSuccessTasks);
	}

}
