import { DataOperationStatusService as dataOperationStatus } from './data-operation-status.service';
import { IndirectProcessor } from '../interfaces/indirect-processor';


export class PerformDataOperationService { // implements IDoThis

	static async go(processor: IndirectProcessor) {
		dataOperationStatus.waitingForResult = true;
		await processor.process();
		dataOperationStatus.waitingForResult = false;
	}

}
