import { IndirectProcessor } from '../interfaces/indirect-processor';


export class PerformDataProcessRequiringWaitingService { // implements IDoThis

	static async go(
		processor: IndirectProcessor, processStatus: { waiting: boolean }
	) {
		processStatus.waiting = true;
		await processor.process();
		processStatus.waiting = false;
	}

}
