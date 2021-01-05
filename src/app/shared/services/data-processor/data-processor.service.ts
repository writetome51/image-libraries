import { Processor } from '@interfaces/processor';
import { DataProcessResultInterpreterService }
	from '@services/data-processor/data-process-result-interpreter.service';


export abstract class DataProcessorService implements Processor {

	constructor(private __resultInterpreter: DataProcessResultInterpreterService) {
	}


	async process(...args) {
		let result = await this._getResult(...args);
		await this.__resultInterpreter.interpret(result);
	}


	protected abstract _getResult(...args): any;

}
