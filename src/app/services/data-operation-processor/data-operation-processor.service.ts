import { ResultInterpreterService } from '../result-interpreter/result-interpreter.service';
import { DataOperationProcessor } from '../../../interfaces/data-operation-processor';


export abstract class DataOperationProcessorService implements DataOperationProcessor {

	constructor(private __resultInterpreter: ResultInterpreterService) {
	}


	async process() {
		let result = await this._getResult();
		await this.__resultInterpreter.interpret(result);
	}


	protected abstract _getResult(): any | Promise<any>;

}
