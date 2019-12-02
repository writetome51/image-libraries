import { PerformDataOperationService as performDataOperation }
	from './services/perform-data-operation.service';
import { DataOperationProcessorService }
	from './services/data-operation-processor/data-operation-processor.service';
import { DataOperationProcessor } from '../interfaces/data-operation-processor';


export abstract class DataOperationProcessorComponent implements DataOperationProcessor {

	constructor(private __dataOperationProcessor: DataOperationProcessorService) {
	}


	async process() {
		await performDataOperation.go(this.__dataOperationProcessor);
	}

}
