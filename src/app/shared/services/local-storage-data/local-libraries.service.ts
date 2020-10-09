import { Injectable } from '@angular/core';
import { LocalStorageDataService } from './local-storage-data.service';
import { LocalStorageService } from '../local-storage.service';
import { DBLibrary } from '@interfaces/db-library';


@Injectable({providedIn: 'root'})

export class LocalLibrariesService extends LocalStorageDataService {

	constructor(__localStorage: LocalStorageService) {
		super(__localStorage);
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
