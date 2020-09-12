import { ClickStartedProcessingStatusData as processingStatus }
	from '@runtime-state-data/click-started-processing-status.data';
import { PerformDataProcessRequiringWaitingService as performDataProcessRequiringWaiting }
	from '@services/perform-data-process-requiring-waiting.service';
import { Processor } from '@interfaces/processor';


export abstract class StartDataProcessContainerComponent {

	constructor(private __processor: Processor) {
	}


	async start(processArgs = []) {
		await performDataProcessRequiringWaiting.go(this.__processor, processingStatus, processArgs);
	}

}
