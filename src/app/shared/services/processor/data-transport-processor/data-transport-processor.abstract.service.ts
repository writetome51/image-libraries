import { InterpretDataTransportResultService }
	from '../interpret-result/interpret-data-transport-result/interpret-data-transport-result.service';
import { ProcessorService } from '@processor/processor.abstract.service';
import { IDoThis } from '@interfaces/i-do-this/i-do-this.interface';


export abstract class DataTransportProcessorService extends ProcessorService {

	constructor(
		__getResult: IDoThis,
		__interpretResult: InterpretDataTransportResultService
	) {
		super(__getResult, __interpretResult);
	}

}
