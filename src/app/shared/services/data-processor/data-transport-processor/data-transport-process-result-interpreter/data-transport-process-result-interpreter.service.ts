import { HandleDataTransportProcessErrorService }
	from '@services/data-processor/data-transport-processor/data-transport-process-result-interpreter/handle-data-transport-process-error/handle-data-transport-process-error.service';
import { IDoThis } from '@interfaces/i-do-this';
import { DataProcessResultInterpreterService }
	from '@services/data-processor/data-process-result-interpreter.service';


export abstract class DataTransportProcessResultInterpreterService
	extends DataProcessResultInterpreterService {

	constructor(
		__handleError: HandleDataTransportProcessErrorService,
		__runPostSuccessTasks: IDoThis
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
