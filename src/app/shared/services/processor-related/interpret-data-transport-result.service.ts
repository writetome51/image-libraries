import { HandleDataTransportErrorService }
	from './handle-error/handle-data-transport-error/handle-data-transport-error.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { InterpretResultService } from '@services/processor-related/interpret-result/interpret-result.abstract.service';


export abstract class InterpretDataTransportResultService extends InterpretResultService {

	constructor(
		__handleError: HandleDataTransportErrorService,
		__runPostSuccessTasks: IDoThis
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
