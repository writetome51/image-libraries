import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { DataTransportResultInterpreterService }
	from './data-transport-result-interpreter/data-transport-result-interpreter.service';
import { DataTransportProcessorService } from './data-transport-processor.service';
import { ValidatingInputService, ValidatingInputsService } from '@writetome51/validating-inputs';


export abstract class FormDataTransportProcessorService extends DataTransportProcessorService {

	constructor(
		private __validatingInputs: ValidatingInputsService | ValidatingInputService,
		__resultInterpreter: DataTransportResultInterpreterService
	) {
		super(__resultInterpreter);
	}


	async process() {
		if (
			(this.__validatingInputs instanceof ValidatingInputsService
				&& this.__validatingInputs.areValid())
			|| (this.__validatingInputs instanceof ValidatingInputService
			&& this.__validatingInputs.isValid())
		) {
			await super.process();
		}
		else {
			alert.error = this.__validatingInputs.error;
		}
	}

}
