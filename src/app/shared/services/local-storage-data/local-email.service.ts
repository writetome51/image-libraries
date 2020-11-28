import { Injectable } from '@angular/core';
import { LocalStorageItemService } from './local-storage-item.service';


@Injectable({providedIn: 'root'})

export class LocalEmailService extends LocalStorageItemService {

	constructor() {
		super('emlObj');
		this._key = 'eml';
	}

}
