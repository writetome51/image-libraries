import { ValidatingInputsService } from '../../validating-inputs/validating-inputs.service';
import { DataOperationProcessorService } from './data-operation-processor.service';
import { ResultInterpreterService } from '../result-interpreter/result-interpreter.service';


export abstract class FormDataOperationProcessorService extends DataOperationProcessorService {

	constructor(
		private __validatingInputs: ValidatingInputsService,
		__resultInterpreter: ResultInterpreterService
	) {
		super(__resultInterpreter);
	}


	async process() {
		if (this.__validatingInputs.areValid()) {
			await super.process();
		}
	}

}
