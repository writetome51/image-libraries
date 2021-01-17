import { Processor } from '@interfaces/processor.interface';
import { ProcessResultInterpreterService } from './process-result-interpreter.service';


export abstract class ProcessorService implements Processor {

	constructor(private __resultInterpreter: ProcessResultInterpreterService) {
	}


	async process(...args): Promise<void> {
		let result = await this._getResult(...args);
		await this.__resultInterpreter.interpret(result);
	}


	protected abstract _getResult(...args): any;

}
