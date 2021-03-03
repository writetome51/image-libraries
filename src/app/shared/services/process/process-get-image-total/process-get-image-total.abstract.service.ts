import { ProcessDbOperationService } from '../process-db-operation.abstract.service';
import { InterpretGetImageTotalResultService }
	from './interpret-get-image-total-result.abstract.service';
import { IDoThis } from '@interfaces/i-do-this.interface';


// Getting the total number of images is required by AppPaginatorDataSource

export abstract class ProcessGetImageTotalService extends ProcessDbOperationService {

	constructor(
		__getResult: IDoThis,
		__interpretResult: InterpretGetImageTotalResultService
	) {
		super(__getResult, __interpretResult);
	}

}
