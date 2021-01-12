import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { DataTransportProcessResultInterpreterService }
	from '@data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { DataTransportProcessorService } from './data-transport-processor.service';
import { ValidatingInputService, ValidatingInputsService } from '@writetome51/validating-inputs';


export abstract class FormDataTransportProcessorService extends DataTransportProcessorService {

	constructor(
		private __validatingInputs: ValidatingInputsService | ValidatingInputService,
		__resultInterpreter: DataTransportProcessResultInterpreterService
	) {
		super(__resultInterpreter);
	}


	async process() {
		if (this.__validatingInputs.isValid()) await super.process();

		else alert.error = this.__validatingInputs.error;
	}

}
