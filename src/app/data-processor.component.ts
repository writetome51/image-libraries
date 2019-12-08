import { PerformDataOperationService as performDataOperation }
	from './services/perform-data-operation.service';
import { DataProcessorService }
	from './services/data-processor/data-processor.service';
import { DataProcessor } from './interfaces/data-processor';


export abstract class DataProcessorComponent implements DataProcessor {

	constructor(private __dataProcessor: DataProcessorService) {
	}


	async process() {
		await performDataOperation.go(this.__dataProcessor);
	}

}
