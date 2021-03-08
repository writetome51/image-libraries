import { AlertService as alert } from '@services/alert.service';
import { ProcessDbOperationService } from './process-db-operation.abstract.service';
import { ValidatingInputService, ValidatingInputsService } from '@writetome51/validating-inputs';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { InterpretDbOperationResultService }
	from '@interpret-result/interpret-db-operation-result.abstract.service';


export abstract class ProcessSendFormDataToDbService extends ProcessDbOperationService {

	constructor(
		private __validatingInputs: ValidatingInputsService | ValidatingInputService,
		__getResult: IDoThis,
		__interpretResult: InterpretDbOperationResultService
	) {
		super(__getResult, __interpretResult);
	}


	async go() {
		if (this.__validatingInputs.isValid()) await super.go();

		else alert.setError(this.__validatingInputs.error);
	}

}
