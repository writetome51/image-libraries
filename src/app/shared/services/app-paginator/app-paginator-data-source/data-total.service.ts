import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { ReadWriteDataContainer } from '@interfaces/data-container/read-write-data-container.interface';


export abstract class DataTotalService implements ReadWriteDataContainer<number> {

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
