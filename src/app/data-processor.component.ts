import { PerformDataOperationService as performDataOperation }
	from './services/perform-data-operation.service';
import { IndirectProcessor } from './interfaces/indirect-processor';


export abstract class DataProcessorComponent implements IndirectProcessor {

	constructor(private __processor: IndirectProcessor) {
	}


	async process() {
		await performDataOperation.go(this.__processor);
	}

}
