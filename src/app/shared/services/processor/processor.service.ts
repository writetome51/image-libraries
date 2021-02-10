import { Processor } from '@interfaces/processor.interface';
import { ProcessResultInterpreterService } from './process-result-interpreter.service';
import { IDoThis } from '@interfaces/i-do-this.interface';


export abstract class ProcessorService implements Processor {

	constructor(
		private __getResult: IDoThis,
		private __resultInterpreter: ProcessResultInterpreterService
	) {
	}


	async process(...args): Promise<void> {
		let result = await this.__getResult.go(...args);
		await this.__resultInterpreter.interpret(result);
	}

}
