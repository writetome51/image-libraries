import { PerformDataProcessRequiringWaitingService as performDataProcessRequiringWaiting }
	from './services/perform-data-process-requiring-waiting.service';
import { IndirectProcessor } from './interfaces/indirect-processor';
import { ProcessingButtonOperationStatusData as operationStatus }
	from './data/runtime-state-data/processing-button-operation-status.data';


export abstract class DataProcessorComponent implements IndirectProcessor {

	constructor(private __processor: IndirectProcessor) {
	}


	async process() {
		await performDataProcessRequiringWaiting.go(this.__processor, operationStatus);
	}

}
