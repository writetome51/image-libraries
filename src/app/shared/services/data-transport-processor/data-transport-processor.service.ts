import { DataTransportResultInterpreterService }
	from '@data-transport-result-interpreter/data-transport-result-interpreter.service';
import { IndirectProcessor } from '@interfaces/indirect-processor';


export abstract class DataTransportProcessorService implements IndirectProcessor {

	constructor(private __resultInterpreter: DataTransportResultInterpreterService) {
	}


	async process() {
		let result = await this._getResult();
		await this.__resultInterpreter.interpret(result);
	}


	protected abstract _getResult(): any;

}
