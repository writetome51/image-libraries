import { DataTransportProcessResultInterpreterService }
	from '@data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { ProcessorService } from '@processor/processor.service';
import { IDoThis } from '@interfaces/i-do-this.interface';


export abstract class DataTransportProcessorService extends ProcessorService {

	constructor(
		__getResult: IDoThis,
		__resultInterpreter: DataTransportProcessResultInterpreterService
	) {
		super(__getResult, __resultInterpreter);
	}

}
