import { DataOperationStatusService as dataOperationStatus } from './data-operation-status.service';
import { DataOperationProcessorService }
	from './data-operation-processor/data-operation-processor.service';


export class PerformDataOperationService { // implements IDoThis

	static async go(processor: DataOperationProcessorService) {
		dataOperationStatus.waitingForResult = true;
		await processor.process();
		dataOperationStatus.waitingForResult = false;
	}

}
