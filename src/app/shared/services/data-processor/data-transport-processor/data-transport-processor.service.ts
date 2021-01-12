import { DataTransportProcessResultInterpreterService }
	from '@data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { DataProcessorService } from '@data-processor/data-processor.service';


export abstract class DataTransportProcessorService extends DataProcessorService {

	constructor(__resultInterpreter: DataTransportProcessResultInterpreterService) {
		super(__resultInterpreter);
	}

}