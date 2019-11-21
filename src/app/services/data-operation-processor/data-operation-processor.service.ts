import { ResultInterpreterService } from '../result-interpreter/result-interpreter.service';
import { DataOperationProcessor } from '../../../interfaces/data-operation-processor';
import { AlertService as alert} from '../alert.service';


export abstract class DataOperationProcessorService implements DataOperationProcessor {

	constructor(private __resultInterpreter: ResultInterpreterService) {
	}


	async process() {
		alert.clear(); // Removes any pre-existing alerts.
		let result = await this._getResult();
		await this.__resultInterpreter.interpret(result);
	}


	protected abstract _getResult(): any | Promise<any>;

}
