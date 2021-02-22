import { ProcessorService } from '@services/processor-related/processor.abstract.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { InterpretDataTransportResultService }
	from './interpret-data-transport-result.service';


export abstract class DataTransportProcessorService extends ProcessorService {

	constructor(
		__getResult: IDoThis,
		__interpretResult: InterpretDataTransportResultService
	) {
		super(__getResult, __interpretResult);
	}

}
