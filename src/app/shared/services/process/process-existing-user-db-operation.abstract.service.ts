import { ProcessService } from './process.abstract.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { InterpretExistingUserDBOperationResultService }
	from '@interpret-result/interpret-existing-user-db-operation-result.abstract.service';


export abstract class ProcessExistingUserDBOperationService extends ProcessService {

	constructor(
		__getResult: IDoThis,
		__interpretResult: InterpretExistingUserDBOperationResultService
	) {
		super(__getResult, __interpretResult);
	}

}
