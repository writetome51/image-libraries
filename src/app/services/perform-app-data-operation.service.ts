import { Injectable } from '@angular/core';
import { DataOperationStatusService } from './data-operation-status.service';
import { IDoThis } from '../../interfaces/i-do-this';
import { DataOperationProcessorService } from './data-operation-processor/data-operation-processor.service';


@Injectable({
	providedIn: 'root'
})
export class PerformAppDataOperationService implements IDoThis {

	constructor(private __dataOperationStatus: DataOperationStatusService) {
	}


	async go(processor: DataOperationProcessorService) {
		this.__dataOperationStatus.waitingForResult = true;
		await processor.process();
		this.__dataOperationStatus.waitingForResult = false;
	}

}
