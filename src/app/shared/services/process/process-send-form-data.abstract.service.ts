import { AlertService as alert } from '@services/alert.service';
import { ValidatingInputService, ValidatingInputsService } from '@writetome51/validating-inputs';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { ProcessService } from '@process/process.abstract.service';
import { InterpretResultService } from '@interpret-result/interpret-result.abstract.service';


export abstract class ProcessSendFormDataService extends ProcessService {

	constructor(
		private __validatingInputs: ValidatingInputsService | ValidatingInputService,
		__getResult: IDoThis,
		__interpretResult: InterpretResultService
	) {
		super(__getResult, __interpretResult);
	}


	async go() {
		if (this.__validatingInputs.isValid()) await super.go();

		else alert.setError(this.__validatingInputs.error);
	}

}
