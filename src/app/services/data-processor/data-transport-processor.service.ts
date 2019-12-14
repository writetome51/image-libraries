import { ResultInterpreterService } from './result-interpreter/result-interpreter.service';
import { Processor } from '../../interfaces/processor';


export abstract class DataTransportProcessorService implements Processor {

	constructor(private __resultInterpreter: ResultInterpreterService) {
	}


	async process() {
		let result = await this._getResult();
		await this.__resultInterpreter.interpret(result);
	}


	protected abstract _getResult(): any;

}
