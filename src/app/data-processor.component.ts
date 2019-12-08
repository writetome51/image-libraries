import { PerformDataOperationService as performDataOperation }
	from './services/perform-data-operation.service';
import { DataOperationProcessorService }
	from './services/data-operation-processor/data-operation-processor.service';
import { DataProcessor } from '../interfaces/data-processor';


export abstract class DataProcessorComponent implements DataProcessor {

	constructor(private __dataOperationProcessor: DataOperationProcessorService) {
	}


	async process() {
		await performDataOperation.go(this.__dataOperationProcessor);
	}

}
