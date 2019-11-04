import { ValidatingInputsService } from '../validating-inputs/validating-inputs.service';
import { ResultInterpreter } from '../../interfaces/result-interpreter';
import { DataOperationProcessorService } from './data-operation-processor.service';


export abstract class FormDataOperationProcessorService extends DataOperationProcessorService {

	constructor(
		private __validatingInputs: ValidatingInputsService,
		__resultInterpreter: ResultInterpreter
	) {
		super(__resultInterpreter);
	}


	async process() {
		if (this.__validatingInputs.areValid()) {
			await super.process();
		}
	}

}
