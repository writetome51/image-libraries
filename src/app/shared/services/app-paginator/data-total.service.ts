import { ImageTotalData as imageTotal }
	from '../../../../data-structures/runtime-state-data/static-classes/resettable-to-default/image-total.data';
import { DataTransportProcessorService }
	from '../data-transport-processor/data-transport-processor.service';


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
