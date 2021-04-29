import { AlertsService as alerts } from '@services/alerts.service';
import { ValidatingInputService, ValidatingInputsService } from '@writetome51/validating-inputs';
import { ProcessService } from '@process/process.abstract.service';
import { InterpretResultService } from '@interpret-result/interpret-result.abstract.service';
import { GetResult } from '@interfaces/get-result.interface';


export abstract class ProcessSendFormDataService extends ProcessService {

	constructor(
		private __validatingInputs: ValidatingInputsService | ValidatingInputService,
		__getResult: GetResult,
		__interpretResult: InterpretResultService
	) {
		super(__getResult, __interpretResult);
	}


	async go() {
		if (this.__validatingInputs.isValid()) await super.go();

		else alerts.setError(this.__validatingInputs.error);
	}

}
