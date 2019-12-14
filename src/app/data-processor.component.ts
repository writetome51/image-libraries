import { PerformDataOperationService as performDataOperation }
	from './services/perform-data-operation.service';
import { DataProcessorService } from './services/data-processor/data-processor.service';
import { IndirectProcessor } from './interfaces/indirect-processor';


export abstract class DataProcessorComponent implements IndirectProcessor {

	constructor(private __dataProcessor: DataProcessorService) {
	}


	async process() {
		await performDataOperation.go(this.__dataProcessor);
	}

}
