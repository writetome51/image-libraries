import { PerformDataProcessRequiringWaitingService as performDataProcessRequiringWaiting }
	from './services/perform-data-process-requiring-waiting.service';
import { ProcessingButtonOperationStatusData as operationStatus }
	from '../data-structures/runtime-state-data/processing-button-operation-status.data';
import { Processor } from '../interfaces/processor';


export abstract class StartDataProcessComponent {

	constructor(private __processor: Processor) {
	}


	async start(processArgs = []) {
		await performDataProcessRequiringWaiting.go(
			this.__processor, operationStatus, processArgs
		);
	}

}
