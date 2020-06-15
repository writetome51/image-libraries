import { DataTransportResultCheckService }
	from './data-transport-result-check/data-transport-result-check.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { Interpreter } from '../../../../interfaces/interpreter';
import { DirectProcessor } from '../../../../interfaces/direct-processor';


export abstract class DataTransportResultInterpreterService implements Interpreter {

	constructor(
		private __dataTransportResultCheck: DataTransportResultCheckService,
		private __resultProcessor: DirectProcessor
	) {
	}


	async interpret(result: object): Promise<void> {
		result = await this.__dataTransportResultCheck.returnIfNoError(result);
		if (hasValue(result)) await this.__resultProcessor.process(result);
	}

}
