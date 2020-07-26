import { PerformDataProcessRequiringWaitingService as performDataProcessRequiringWaiting }
	from '../services/perform-data-process-requiring-waiting.service';
import { ClickStartedProcessingStatusData as processingStatus }
	from '../../../data-structures/runtime-state-data/click-started-processing-status.data';
import { Processor } from '../../../interfaces/processor';


export abstract class StartDataProcessComponent {

	constructor(private __processor: Processor) {
	}


	async start(processArgs = []) {
		await performDataProcessRequiringWaiting.go(this.__processor, processingStatus, processArgs);
	}

}
