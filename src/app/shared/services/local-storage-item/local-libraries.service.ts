import { Injectable } from '@angular/core';
import { LocalStorageItemService } from './local-storage-item.service';
import { DBLibrary } from '@interfaces/db-library';


@Injectable({providedIn: 'root'})

export class LocalLibrariesService extends LocalStorageItemService {

	constructor() {
		super('libsObj');
		this._key = 'libs';
	}


	get(): DBLibrary[] {
		try {
			return super.get();
		}
		catch (error) {
			return undefined;
		}
	}

}
