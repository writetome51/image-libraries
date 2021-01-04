import { Processor } from '@interfaces/processor';
import { Interpreter } from '@interfaces/interpreter';


export abstract class DataProcessorService implements Processor {

	constructor(private __resultInterpreter: Interpreter) {
	}


	async process(...args) {
		let result = await this._getResult(...args);
		await this.__resultInterpreter.interpret(result);
	}


	protected abstract _getResult(...args): any;

}
