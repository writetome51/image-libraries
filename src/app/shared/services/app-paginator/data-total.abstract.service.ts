import { DataContainer } from '@interfaces/data-container.interface';
import { Gettable } from '@interfaces/gettable.interface';
import { ProcessorService } from '@processor/processor.abstract.service';


export abstract class DataTotalService implements DataContainer<number> {

	constructor(
		private __storeTotal_processor: ProcessorService,
		private __storedTotal: Gettable<number>
	) {
	}


	async set() {
		await this.__storeTotal_processor.process();
	}


	get(): number {
		return this.__storedTotal.get();
	}

}
