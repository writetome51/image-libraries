import { Injectable } from '@angular/core';
import { ItemInLocalStorageService } from './item-in-local-storage.service';


@Injectable({providedIn: 'root'})

export class LocalZoomOnScrollService extends ItemInLocalStorageService {

	constructor() {
		super('zoomOnScroll');
	}


	get(): { enabled: boolean } {
		try {
			return super.get();
		}
		catch (error) {
			this.set({enabled: false});
			return {enabled: false};
		}
	}


}
