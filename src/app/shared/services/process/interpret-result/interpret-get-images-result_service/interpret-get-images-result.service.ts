import { HandleGetImagesErrorService } from './handle-get-images-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterGettingImagesService }
	from '@run-post-success-tasks/run-tasks-after-getting-images.service';
import { InterpretDbOperationResultService }
	from '../interpret-db-operation-result.abstract.service';


@Injectable({providedIn: 'root'})
export class InterpretGetImagesResultService extends InterpretDbOperationResultService {

	constructor(
		__handleError: HandleGetImagesErrorService,
		__runPostSuccessTasks: RunTasksAfterGettingImagesService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
