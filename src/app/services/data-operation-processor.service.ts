import { Processor } from '../../interfaces/processor';
import { ResultInterpreter } from '../../interfaces/result-interpreter';


export abstract class DataOperationProcessorService implements Processor {


	constructor(private __resultInterpreter: ResultInterpreter) {
	}


	async process() {
		let result = await this._getResult();
		await this.__resultInterpreter.interpret(result);
	}


	protected abstract _getResult(): any | Promise<any>;


}
