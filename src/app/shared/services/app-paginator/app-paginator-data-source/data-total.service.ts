import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';


export abstract class DataTotalService {

	constructor(
		private __set_dataTotal_Processor: DataTransportProcessorService,
		private __storedTotal: { get: () => number }
	) {
	}


	async set() {
		await this.__set_dataTotal_Processor.process();
	}


	get(): number {
		return this.__storedTotal.get();
	}

}
