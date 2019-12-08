import { DataOperationStatusService as dataOperationStatus } from './data-operation-status.service';
import { DataProcessorService } from './data-processor/data-processor.service';


export class PerformDataOperationService { // implements IDoThis

	static async go(processor: DataProcessorService) {
		dataOperationStatus.waitingForResult = true;
		await processor.process();
		dataOperationStatus.waitingForResult = false;
	}

}
