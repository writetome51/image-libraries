import { Processor } from '../../interfaces/processor';
import { ValidatingInputsService } from '../validating-inputs/validating-inputs.service';
import { ResultInterpreter } from '../../interfaces/result-interpreter';


export abstract class DataOperationProcessorService implements Processor {

	constructor(
		private __validatingInputs: ValidatingInputsService,
		private __resultInterpreter: ResultInterpreter
	) {
	}


	async process() {
		if (this.__validatingInputs.areValid()) {
			let result = await this._getResult();
			await this.__resultInterpreter.interpret(result);
		}
	}


	// Intended to be defined in subclasses.

	protected _getResult(): any | Promise<any> {
	}


}
