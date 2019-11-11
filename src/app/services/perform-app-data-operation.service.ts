import { DataOperationStatusService as dataOperationStatus} from './data-operation-status.service';
import { DataOperationProcessorService }
	from './data-operation-processor/data-operation-processor.service';
import { IDoThis } from '../../interfaces/i-do-this';
import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class PerformAppDataOperationService implements IDoThis {


	async go(processor: DataOperationProcessorService) {
		dataOperationStatus.waitingForResult = true;
		await processor.process();
		dataOperationStatus.waitingForResult = false;
	}


}
