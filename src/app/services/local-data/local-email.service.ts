import { Injectable } from '@angular/core';
import { LocalDataService } from './local-data.service';
import { LocalStorageService } from '../local-storage.service';


@Injectable({providedIn: 'root'})

export class LocalEmailService extends LocalDataService {

	constructor(__localStorage: LocalStorageService) {
		super(__localStorage);
		this._key = 'eml';
	}

}
