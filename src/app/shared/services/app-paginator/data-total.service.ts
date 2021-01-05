import { ImageTotalData as imageTotal }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { DataTransportProcessorService }
	from '@services/data-processor/data-transport-processor/data-transport-processor.service';


export abstract class DataTotalService {

	constructor(private __set_dataTotal_Processor: DataTransportProcessorService) {
	}


	async set() {
		await this.__set_dataTotal_Processor.process();
	}


	get(): number {
		return imageTotal.data;
	}

}
