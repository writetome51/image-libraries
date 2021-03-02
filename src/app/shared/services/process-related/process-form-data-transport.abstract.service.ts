import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { ProcessDataTransportService } from './process-data-transport.abstract.service';
import { ValidatingInputService, ValidatingInputsService } from '@writetome51/validating-inputs';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { InterpretDataTransportResultService }
	from './interpret-data-transport-result.service';


export abstract class ProcessFormDataTransportService extends ProcessDataTransportService {

	constructor(
		private __validatingInputs: ValidatingInputsService | ValidatingInputService,
		__getResult: IDoThis,
		__interpretResult: InterpretDataTransportResultService
	) {
		super(__getResult, __interpretResult);
	}


	async go() {
		if (this.__validatingInputs.isValid()) await super.go();

		else alert.error = this.__validatingInputs.error;
	}

}
