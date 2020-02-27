import { IndirectProcessor } from '../interfaces/indirect-processor';


export class PerformDataProcessRequiringWaitingService { // implements IDoThis

	static async go(
		processor: IndirectProcessor, processStatus: { waitingForResult: boolean }
	) {
		processStatus.waitingForResult = true;
		await processor.process();
		processStatus.waitingForResult = false;
	}

}
