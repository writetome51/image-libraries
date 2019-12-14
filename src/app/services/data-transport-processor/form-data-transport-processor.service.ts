import { DataTransportResultInterpreterService }
	from './data-transport-result-interpreter/data-transport-result-interpreter.service';
import { ValidatingInputsService } from '@writetome51/validating-inputs';
import { DataTransportProcessorService } from './data-transport-processor.service';


export abstract class FormDataTransportProcessorService extends DataTransportProcessorService {

	constructor(
		private __validatingInputs: ValidatingInputsService,
		__resultInterpreter: DataTransportResultInterpreterService
	) {
		super(__resultInterpreter);
	}


	// The process is only begun if the inputs are valid.

	async process() {
		if (this.__validatingInputs.areValid()) {
			await super.process();
		}
	}

}
