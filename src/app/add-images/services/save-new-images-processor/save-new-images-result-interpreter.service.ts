import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService }
	// tslint:disable-next-line:max-line-length
	from '../../../services/data-transport-processor/data-transport-result-interpreter/data-transport-result-interpreter.service';
import { RunTasksNeededAfterSuccessfulSavingNewImagesService }
	from './run-tasks-needed-after-successful-saving-new-images.service';
import { SaveNewImagesResultCheckService } from './save-new-images-result-check.service';


@Injectable({providedIn: 'root'})

export class SaveNewImagesResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__saveNewImagesResultCheck: SaveNewImagesResultCheckService,
		__runTasksNeededAfterSuccessfulResult: RunTasksNeededAfterSuccessfulSavingNewImagesService
	) {
		super(__saveNewImagesResultCheck, __runTasksNeededAfterSuccessfulResult);
	}

}
