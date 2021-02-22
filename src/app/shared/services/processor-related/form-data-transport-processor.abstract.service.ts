import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { DataTransportProcessorService } from './data-transport-processor.abstract.service';
import { ValidatingInputService, ValidatingInputsService } from '@writetome51/validating-inputs';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { InterpretDataTransportResultService }
	from './interpret-data-transport-result.service';


export abstract class FormDataTransportProcessorService extends DataTransportProcessorService {

	constructor(
		private __validatingInputs: ValidatingInputsService | ValidatingInputService,
		__getResult: IDoThis,
		__interpretResult: InterpretDataTransportResultService
	) {
		super(__getResult, __interpretResult);
	}


	async process() {
		if (this.__validatingInputs.isValid()) await super.process();

		else alert.error = this.__validatingInputs.error;
	}

}
