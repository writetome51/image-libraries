import { IDoThis } from '@interfaces/i-do-this.interface';
import { Interpreter } from '@interfaces/interpreter.interface';
import { HandleProcessErrorService } from './handle-process-error.service';


export abstract class ProcessResultInterpreterService implements Interpreter {

	constructor(
		private __handleError: HandleProcessErrorService,
		private __runPostSuccessTasks: IDoThis
	) {
	}


	async interpret(result: any | { error: { message: string } }): Promise<void> {

		if (result.error) await this.__handleError.go(result.error);

		else await this.__runPostSuccessTasks.go(result);
	}

}
