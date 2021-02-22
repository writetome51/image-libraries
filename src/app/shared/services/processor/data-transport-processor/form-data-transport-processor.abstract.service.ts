import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { InterpretDataTransportResultService }
	from './interpret-data-transport-result/interpret-data-transport-result.service';
import { DataTransportProcessorService } from './data-transport-processor.abstract.service';
import { ValidatingInputService, ValidatingInputsService } from '@writetome51/validating-inputs';
import { IDoThis } from '@interfaces/i-do-this/i-do-this.interface';


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
