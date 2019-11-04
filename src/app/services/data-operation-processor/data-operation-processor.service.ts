import { Processor } from '../../../interfaces/processor';
import { ResultInterpreterService } from '../result-interpreter/result-interpreter.service';


export abstract class DataOperationProcessorService implements Processor {


	constructor(private __resultInterpreter: ResultInterpreterService) {
	}


	async process() {
		let result = await this._getResult();
		await this.__resultInterpreter.interpret(result);
	}


	protected abstract _getResult(): any | Promise<any>;


}
