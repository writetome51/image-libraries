import { ProcessService } from './/process.abstract.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { InterpretDbOperationResultService }
	from '@interpret-result/interpret-db-operation-result.abstract.service';


export abstract class ProcessDbOperationService extends ProcessService {

	constructor(
		__getResult: IDoThis,
		__interpretResult: InterpretDbOperationResultService
	) {
		super(__getResult, __interpretResult);
	}

}
