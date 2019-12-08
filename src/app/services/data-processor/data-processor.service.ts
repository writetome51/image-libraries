import { ResultInterpreterService } from './result-interpreter/result-interpreter.service';
import { DataProcessor } from '../../interfaces/data-processor';


export abstract class DataProcessorService implements DataProcessor {

	constructor(private __resultInterpreter: ResultInterpreterService) {
	}


	async process() {
		let result = await this._getResult();
		await this.__resultInterpreter.interpret(result);
	}


	protected abstract _getResult(): any | Promise<any>;

}
