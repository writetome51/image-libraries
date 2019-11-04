import { ResultInterpreter } from '../../../interfaces/result-interpreter';
import { ResultProcessor } from '../../../interfaces/result-processor';
import { DataOperationResultCheckService } from '../data-operation-result-check/data-operation-result-check.service';


export abstract class ResultInterpreterService implements ResultInterpreter {

	constructor(
		private __dataOperationResultCheck: DataOperationResultCheckService,
		private __resultProcessor: ResultProcessor
	) {
	}


	async interpret(result): Promise<void> {
		await this.__dataOperationResultCheck.ifSuccessful_processResult(
			result,
			(result) => this._process(result)
		);
	}


	protected _process(result): void {
		this.__resultProcessor.process(result);
	}


}
