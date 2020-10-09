import { Processor } from '@interfaces/processor';


export class PerformDataProcessRequiringWaitingService { // implements IDoThis

	static async go(
		processor: Processor, processStatus: { waiting: boolean }, processArgs = []
	) {
		processStatus.waiting = true;
		await processor.process(...processArgs);
		processStatus.waiting = false;
	}

}
