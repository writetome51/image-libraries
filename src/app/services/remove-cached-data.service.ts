import { Injectable } from '@angular/core';
import { IDoThis } from '../interfaces/i-do-this';
import { CurrentUserLibrariesService } from './library/current-user-libraries.service';
import { LocalStorageService } from './local-data/local-storage.service';


@Injectable({providedIn: 'root'})

export class RemoveCachedDataService implements IDoThis {

	constructor(
		private __currentUserLibraries: CurrentUserLibrariesService,
		private __localStorage: LocalStorageService
	) {
	}


	async go() {
		this.__currentUserLibraries.unset_data();
		this.__localStorage.removeAll();
	}

}
