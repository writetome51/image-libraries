import { Gettable } from '@interfaces/gettable.interface';


export abstract class HasImageTotalComponent {

	get imageTotal(): number {
		return this.__storedImageTotal.get();
	}


	constructor(private __storedImageTotal: Gettable<number>) {}

}
