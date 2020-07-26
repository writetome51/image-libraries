import { PerformDataProcessRequiringWaitingService as performDataProcessRequiringWaiting }
	from '../services/perform-data-process-requiring-waiting.service';
import { ClickStartedProcessingStatusData as processingStatus }
	from '@runtime-state-data/click-started-processing-status.data';
import { Processor } from '@shared/interfaces/processor';


export abstract class StartDataProcessComponent {

	constructor(private __processor: Processor) {
	}


	async start(processArgs = []) {
		await performDataProcessRequiringWaiting.go(this.__processor, processingStatus, processArgs);
	}

}
