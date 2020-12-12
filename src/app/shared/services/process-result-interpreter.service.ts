import { hasValue } from '@writetome51/has-value-no-value';
import { IDoThis } from '@interfaces/i-do-this';
import { Interpreter } from '@interfaces/interpreter';
import { ResultCheck } from '@interfaces/result-check';


export abstract class ProcessResultInterpreterService implements Interpreter {

	constructor(
		private __resultCheck: ResultCheck,
		private __runPostSuccessTasks: IDoThis
	) {
	}


	async interpret(result): Promise<void> {
		result = await this.__resultCheck.returnIfNoError(result);
		if (hasValue(result)) await this.__runPostSuccessTasks.go(result);
	}

}
