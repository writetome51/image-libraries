import { DataTransportResultInterpreterService }
	from '@data-transport-result-interpreter/data-transport-result-interpreter.service';
import { Processor } from '@interfaces/processor';


export abstract class DataTransportProcessorService implements Processor {

	constructor(private __resultInterpreter: DataTransportResultInterpreterService) {
	}


	async process(...args) {
		let result = await this._getResult(...args);
		await this.__resultInterpreter.interpret(result);
	}


	protected abstract _getResult(...args): any;

}
