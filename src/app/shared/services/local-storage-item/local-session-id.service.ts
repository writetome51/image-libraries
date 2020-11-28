import { Injectable } from '@angular/core';
import { LocalStorageItemService } from './local-storage-item.service';


@Injectable({providedIn: 'root'})

export class LocalSessionIDService extends LocalStorageItemService {

	constructor() {
		super('lsdObj');
		this._key = 'lsd';
	}


	get(): string {
		try {
			return super.get();
		}
		catch (error) {
			return '';
		}
	}

}
