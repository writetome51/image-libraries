import { HandleDataTransportProcessErrorService }
	from '@handle-data-transport-process-error/handle-data-transport-process-error.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { ProcessResultInterpreterService } from '@processor/process-result-interpreter.service';


export abstract class DataTransportProcessResultInterpreterService
	extends ProcessResultInterpreterService {

	constructor(
		__handleError: HandleDataTransportProcessErrorService,
		__runPostSuccessTasks: IDoThis
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
