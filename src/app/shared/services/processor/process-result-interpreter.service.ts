import { IDoThis } from '@interfaces/i-do-this';
import { Interpreter } from '@interfaces/interpreter';


export abstract class ProcessResultInterpreterService implements Interpreter {

	constructor(
		private __handleError: IDoThis,
		private __runPostSuccessTasks: IDoThis
	) {
	}


	async interpret(result: any | { error: { message: string } }): Promise<void> {

		if (result.error) await this.__handleError.go(result.error);

		else await this.__runPostSuccessTasks.go(result);
	}

}
