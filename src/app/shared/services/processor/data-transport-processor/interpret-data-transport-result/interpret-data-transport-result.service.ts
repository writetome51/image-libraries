import { HandleDataTransportErrorService }
	from './handle-data-transport-error/handle-data-transport-error.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { InterpretResultService } from '@processor/interpret-result.service';


export abstract class InterpretDataTransportResultService extends InterpretResultService {

	constructor(
		__handleError: HandleDataTransportErrorService,
		__runPostSuccessTasks: IDoThis
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
