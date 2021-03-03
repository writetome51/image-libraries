import { HandleGetImageTotalErrorService } from './handle-get-image-total-error.service';
import { RunTasksAfterGettingImageTotalService }
	from './run-tasks-after-getting-image-total.abstract.service';
import { InterpretDbOperationResultService }
	from '@interpret-result/interpret-db-operation-result.abstract.service';


export abstract class InterpretGetImageTotalResultService
	extends InterpretDbOperationResultService {

	constructor(
		__handleError: HandleGetImageTotalErrorService,
		__runPostSuccessTasks: RunTasksAfterGettingImageTotalService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
