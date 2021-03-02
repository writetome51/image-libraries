import { ProcessService } from './/process.abstract.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { InterpretDataTransportResultService }
	from './interpret-data-transport-result.service';


export abstract class ProcessDataTransportService extends ProcessService {

	constructor(
		__getResult: IDoThis,
		__interpretResult: InterpretDataTransportResultService
	) {
		super(__getResult, __interpretResult);
	}

}
