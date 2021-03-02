import { DataContainer } from '@interfaces/data-container.interface';
import { Gettable } from '@interfaces/gettable.interface';
import { ProcessService } from '@services/process-related/process.abstract.service';


export abstract class DataTotalService implements DataContainer<number> {

	constructor(
		private __storeTotal_processor: ProcessService,
		private __storedTotal: Gettable<number>
	) {
	}


	async set() {
		await this.__storeTotal_processor.go();
	}


	get(): number {
		return this.__storedTotal.get();
	}

}
