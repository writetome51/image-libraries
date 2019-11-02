import { Injectable } from '@angular/core';
import { Processor } from '../../interfaces/processor';
import { ValidatingInputsService } from '../validating-inputs/validating-inputs.service';
import { ResultInterpreter } from '../../interfaces/result-interpreter';


@Injectable({
	providedIn: 'root'
})
export abstract class DataOperationProcessorService implements Processor {

	constructor(
		private __resultInterpreter: ResultInterpreter,
		private __validatingInputs: ValidatingInputsService
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
