import { DataProcessResultCheckService }
	from './data-process-result-check/data-process-result-check.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { ResultInterpreter } from '../../../interfaces/result-interpreter';
import { ResultProcessor } from '../../../interfaces/result-processor';


export abstract class ResultInterpreterService implements ResultInterpreter {

	constructor(
		private __dataProcessResultCheck: DataProcessResultCheckService,
		private __resultProcessor: ResultProcessor
	) {
	}


	async interpret(result): Promise<void> {
		result = await this.__dataProcessResultCheck.returnIfNoError(result);
		if (hasValue(result)) this.__resultProcessor.process(result);
	}

}
