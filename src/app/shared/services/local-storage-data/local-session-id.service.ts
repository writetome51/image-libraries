import { Injectable } from '@angular/core';
import { LocalStorageDataService } from './local-storage-data.service';
import { LocalStorageService } from '../local-storage.service';


@Injectable({providedIn: 'root'})

export class LocalSessionIDService extends LocalStorageDataService {

	constructor(__localStorage: LocalStorageService) {
		super(__localStorage);
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
