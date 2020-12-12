import { DataTransportResultCheckService }
	from '@data-transport-result-check/data-transport-result-check.service';
import { IDoThis } from '@interfaces/i-do-this';
import { ProcessResultInterpreterService } from '@services/process-result-interpreter.service';


export abstract class DataTransportResultInterpreterService extends ProcessResultInterpreterService {

	constructor(
		__dataTransportResultCheck: DataTransportResultCheckService,
		__runPostSuccessTasks: IDoThis
	) {
		super(__dataTransportResultCheck, __runPostSuccessTasks);
	}

}
