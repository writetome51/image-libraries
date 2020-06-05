import { PerformDataProcessRequiringWaitingService as performDataProcessRequiringWaiting }
	from './services/perform-data-process-requiring-waiting.service';
import { IndirectProcessor } from '../interfaces/indirect-processor';
import { ProcessingButtonOperationStatusData as operationStatus }
	from '../data-structures/runtime-state-data/processing-button-operation-status.data';


export abstract class StartDataProcessComponent {

	constructor(private __processor: IndirectProcessor) {
	}


	async start() {
		await performDataProcessRequiringWaiting.go(this.__processor, operationStatus);
	}

}
