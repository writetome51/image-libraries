import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { DataContainer } from '@interfaces/data-container.interface';


export abstract class DataTotalService implements DataContainer<number> {

	constructor(
		private __storeTotal_processor: DataTransportProcessorService,
		private __storedTotal: { get: () => number }
	) {
	}


	async set() {
		await this.__storeTotal_processor.process();
	}


	get(): number {
		return this.__storedTotal.get();
	}

}
