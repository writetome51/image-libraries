import { DataContainer } from '@interfaces/data-container.interface';
import { Gettable } from '@interfaces/gettable.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';


export abstract class DataTotalService implements DataContainer<void, number> {

	constructor(
		private __storeTotal: IDoThis,
		private __storedTotal: Gettable<number>
	) {}


	set(): void {
		this.__storeTotal.go();
	}


	get(): number {
		return this.__storedTotal.get();
	}

}
