import { HandleExistingUserDBOperationErrorService }
	from '@process/handle-error/handle-existing-user-db-operation-error_service/handle-existing-user-db-operation-error.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { InterpretResultService } from './interpret-result.abstract.service';


export abstract class InterpretExistingUserDBOperationResultService extends InterpretResultService {

	constructor(
		__handleError: HandleExistingUserDBOperationErrorService,
		__runPostSuccessTasks: IDoThis
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
