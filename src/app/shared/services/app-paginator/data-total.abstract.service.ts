import { DataContainer } from '@interfaces/data-container.interface';
import { Gettable } from '@interfaces/gettable.interface';
import { noValue } from '@writetome51/has-value-no-value';
import { IDoThis } from '@interfaces/i-do-this.interface';


export abstract class DataTotalService implements DataContainer<number> {

	constructor(
		private __storeTotal: IDoThis,
		private __storedTotal: Gettable<number>
	) {}


	set(): void {
		if (noValue(this.get())) this.__storeTotal.go();
	}


	get(): number {
		return this.__storedTotal.get();
	}

}
