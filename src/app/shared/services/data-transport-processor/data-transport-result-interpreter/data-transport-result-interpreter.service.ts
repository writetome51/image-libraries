import { DataTransportResultCheckService }
	from '@data-transport-result-check/data-transport-result-check.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { IDoThis } from '@interfaces/i-do-this';
import { Interpreter } from '@interfaces/interpreter';


export abstract class DataTransportResultInterpreterService implements Interpreter {

	constructor(
		private __dataTransportResultCheck: DataTransportResultCheckService,
		private __runPostSuccessTasks: IDoThis
	) {
	}


	async interpret(result: object): Promise<void> {
		result = await this.__dataTransportResultCheck.returnIfNoError(result);
		if (hasValue(result)) await this.__runPostSuccessTasks.go(result);
	}

}
