import { DataTransportResultInterpreterService }
	from '@data-transport-result-interpreter/data-transport-result-interpreter.service';
import { ProcessorService } from '@services/processor.service';


export abstract class DataTransportProcessorService extends ProcessorService {

	constructor(__resultInterpreter: DataTransportResultInterpreterService) {
		super(__resultInterpreter);
	}

}
