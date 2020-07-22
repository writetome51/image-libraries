import { PerformDataProcessRequiringWaitingService as performDataProcessRequiringWaiting }
	from './shared/services/perform-data-process-requiring-waiting.service';
import { ClickInitiatedProcessingStatusData as processingStatus }
	from '../data-structures/runtime-state-data/click-initiated-processing-status.data';
import { Processor } from '../interfaces/processor';


export abstract class StartDataProcessComponent {

	constructor(private __processor: Processor) {
	}


	async start(processArgs = []) {
		await performDataProcessRequiringWaiting.go(this.__processor, processingStatus, processArgs);
	}

}
