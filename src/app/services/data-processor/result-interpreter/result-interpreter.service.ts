import { ResultInterpreter } from '../../../interfaces/result-interpreter';
import { ResultProcessor } from '../../../interfaces/result-processor';
import { DataProcessResultCheckService }
	from './data-process-result-check/data-process-result-check.service';


export abstract class ResultInterpreterService implements ResultInterpreter {

	constructor(
		private __dataProcessResultCheck: DataProcessResultCheckService,
		private __resultProcessor: ResultProcessor
	) {
	}


	async interpret(result): Promise<void> {
		await this.__dataProcessResultCheck.ifSuccessful_processResult(
			result,
			(result) => this.__process(result)
		);
	}


	private __process(result): void {
		this.__resultProcessor.process(result);
	}

}
