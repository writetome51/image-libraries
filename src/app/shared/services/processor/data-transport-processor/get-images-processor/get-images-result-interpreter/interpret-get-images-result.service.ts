import { InterpretDataTransportResultService }
	from '../../../interpret-result/interpret-data-transport-result/interpret-data-transport-result.service';
import { HandleGetImagesErrorService } from './handle-get-images-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterGettingImagesService } from './run-tasks-after-getting-images.service';


@Injectable({providedIn: 'root'})
export class InterpretGetImagesResultService extends InterpretDataTransportResultService {

	constructor(
		__handleError: HandleGetImagesErrorService,
		__runPostSuccessTasks: RunTasksAfterGettingImagesService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
