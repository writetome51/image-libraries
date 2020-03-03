import { DataTransportResultCheckService }
	from './data-transport-result-check/data-transport-result-check.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { Interpreter } from '../../../interfaces/interpreter';
import { DirectProcessor } from '../../../interfaces/direct-processor';
import { getObjectFromJSON } from 'get-object-from-json';


export abstract class DataTransportResultInterpreterService implements Interpreter {

	constructor(
		private __dataTransportResultCheck: DataTransportResultCheckService,
		private __resultProcessor: DirectProcessor
	) {
	}


	async interpret(result): Promise<void> {
		if (typeof result === 'string') result = getObjectFromJSON(result);
		result = await this.__dataTransportResultCheck.returnIfNoError(result);
		if (hasValue(result)) await this.__resultProcessor.process(result);
	}

}
