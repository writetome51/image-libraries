import { Injectable } from '@angular/core';
import { LocalStorageItemService } from './local-storage-item.service';


@Injectable({providedIn: 'root'})

export class LocalZoomOnScrollService extends LocalStorageItemService {

	constructor() {
		super('zoomOnScrollObj');
		this._key = 'zoomOnScroll';
	}


	get(): { enabled: boolean } {
		try {
			return super.get();
		}
		catch (error) {
			return {enabled: false};
		}
	}

}
