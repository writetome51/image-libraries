import { DataContainer } from '@interfaces/data-container.interface';
import { Gettable } from '@interfaces/gettable.interface';
import { ProcessService } from '@services/process/process.abstract.service';


export abstract class DataTotalService implements DataContainer<number> {

	constructor(
		private __processStoreTotal: ProcessService,
		private __storedTotal: Gettable<number>
	) {
	}


	async set(): Promise<void> {
		await this.__processStoreTotal.go();
	}


	get(): number {
		return this.__storedTotal.get();
	}

}
