import { Injectable } from '@angular/core';
import { ItemInLocalStorageService } from './item-in-local-storage.service';
import { hasValue } from '@writetome51/has-value-no-value';


@Injectable({providedIn: 'root'})

export class LocalZoomOnScrollService extends ItemInLocalStorageService<{enabled: boolean}> {

	constructor() {
		super('zoomOnScroll');
	}


	get(): { enabled: boolean } {
		let value = super.get();
		if (hasValue(value)) return value;
		else {
			let zoomOnScroll = {enabled: false};
			this.set(zoomOnScroll);

			return zoomOnScroll;
		}
	}


}
