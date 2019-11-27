import { DataOperationProcessorService } from './data-operation-processor.service';
import { ResultInterpreterService } from '../result-interpreter/result-interpreter.service';
import { ValidatingInputsService } from '@writetome51/validating-inputs';


export abstract class FormDataOperationProcessorService extends DataOperationProcessorService {

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
