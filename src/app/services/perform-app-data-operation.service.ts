import { DataOperationStatusService as dataOperationStatus } from './data-operation-status.service';
import { DataOperationProcessorService }
	from './data-operation-processor/data-operation-processor.service';
import { AlertService as alert } from './alert.service';


export class PerformAppDataOperationService { // implements IDoThis

	static async go(processor: DataOperationProcessorService) {
		alert.clear(); // Removes any pre-existing alerts.

		dataOperationStatus.waitingForResult = true;
		await processor.process();
		dataOperationStatus.waitingForResult = false;
	}

}
