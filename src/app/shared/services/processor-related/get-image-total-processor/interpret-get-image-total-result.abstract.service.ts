import { HandleGetImageTotalErrorService }
	from './handle-get-image-total-error.service';
import { RunTasksAfterGettingImageTotalService }
	from './run-tasks-after-getting-image-total.abstract.service';
import { InterpretDataTransportResultService } from '@services/processor-related/interpret-data-transport-result.service';


export abstract class InterpretGetImageTotalResultService
	extends InterpretDataTransportResultService {

	constructor(
		__handleError: HandleGetImageTotalErrorService,
		__runPostSuccessTasks: RunTasksAfterGettingImageTotalService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
