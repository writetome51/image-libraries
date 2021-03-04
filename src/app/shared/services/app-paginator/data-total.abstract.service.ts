import { DataContainer } from '@interfaces/data-container.interface';
import { Gettable } from '@interfaces/gettable.interface';
import { noValue } from '@writetome51/has-value-no-value';
import { ProcessGetImageTotalService }
	from '@process-get-image-total/process-get-image-total.abstract.service';


export abstract class DataTotalService implements DataContainer<number> {

	constructor(
		private __processStoreTotal: ProcessGetImageTotalService,
		private __storedTotal: Gettable<number>
	) {
	}


	async set(): Promise<void> {
		if (noValue(this.get())) await this.__processStoreTotal.go();
	}


	get(): number {
		return this.__storedTotal.get();
	}

}
