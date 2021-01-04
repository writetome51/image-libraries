import { DataTransportProcessResultInterpreterService }
	from '../../shared/services/data-transport-processor/data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterSavingNewImagesService } from './run-tasks-after-saving-new-images.service';
import { SaveNewImagesResultCheckService } from './save-new-images-result-check.service';


@Injectable({providedIn: 'root'})
export class SaveNewImagesResultInterpreterService extends DataTransportProcessResultInterpreterService {

	constructor(
		__saveNewImagesResultCheck: SaveNewImagesResultCheckService,
		__runPostSuccessTasks: RunTasksAfterSavingNewImagesService
	) {
		super(__saveNewImagesResultCheck, __runPostSuccessTasks);
	}

}
