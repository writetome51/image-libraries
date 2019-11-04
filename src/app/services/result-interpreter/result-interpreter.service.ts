import { ResultInterpreter } from '../../../interfaces/result-interpreter';
import { ResultProcessor } from '../../../interfaces/result-processor';
import { DataOperationResultService } from '../data-operation-result/data-operation-result.service';


export abstract class ResultInterpreterService implements ResultInterpreter {

	constructor(
		private __dataOperationResult: DataOperationResultService,
		private __resultProcessor: ResultProcessor
	) {
	}


	async interpret(result): Promise<void> {
		await this.__dataOperationResult.ifSuccessful_processResult(
			result,
			(result) => this._process(result)
		);
	}


	protected _process(result): void {
		this.__resultProcessor.process(result);
	}


}
