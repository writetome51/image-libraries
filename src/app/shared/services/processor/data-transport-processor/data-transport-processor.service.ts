import { DataTransportProcessResultInterpreterService }
	from '@data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { ProcessorService } from '@processor/processor.service';


export abstract class DataTransportProcessorService extends ProcessorService {

	constructor(__resultInterpreter: DataTransportProcessResultInterpreterService) {
		super(__resultInterpreter);
	}

}
