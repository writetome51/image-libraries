import { HandleDataTransportProcessErrorService }
	from '@handle-data-transport-process-error/handle-data-transport-process-error.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { InterpretResultService } from '@processor/interpret-result.service';


export abstract class DataTransportProcessResultInterpreterService
	extends InterpretResultService {

	constructor(
		__handleError: HandleDataTransportProcessErrorService,
		__runPostSuccessTasks: IDoThis
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
