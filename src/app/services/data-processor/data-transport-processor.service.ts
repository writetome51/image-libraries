import { ResultInterpreterService } from './result-interpreter/result-interpreter.service';
import { DirectProcessor } from '../../interfaces/direct-processor';


export abstract class DataTransportProcessorService implements DirectProcessor {

	constructor(private __resultInterpreter: ResultInterpreterService) {
	}


	async process() {
		let result = await this._getResult();
		await this.__resultInterpreter.interpret(result);
	}


	protected abstract _getResult(): any;

}
