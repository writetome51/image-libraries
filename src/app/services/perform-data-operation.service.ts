import { DataOperationStatusData as dataOperationStatus } from '../data/data-operation-status.data';
import { IndirectProcessor } from '../interfaces/indirect-processor';


export class PerformDataOperationService { // implements IDoThis

	static async go(processor: IndirectProcessor) {
		dataOperationStatus.waitingForResult = true;
		await processor.process();
		dataOperationStatus.waitingForResult = false;
	}

}
