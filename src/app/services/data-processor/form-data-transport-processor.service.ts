import { ResultInterpreterService } from './result-interpreter/result-interpreter.service';
import { ValidatingInputsService } from '@writetome51/validating-inputs';
import { DataTransportProcessorService } from './data-transport-processor.service';


export abstract class FormDataTransportProcessorService extends DataTransportProcessorService {

	constructor(
		private __validatingInputs: ValidatingInputsService,
		__resultInterpreter: ResultInterpreterService
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
