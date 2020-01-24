import { Injectable } from '@angular/core';
import { IDoThis } from '../interfaces/i-do-this';
import { LocalStorageService } from './local-data/local-storage.service';
import { RemoveRuntimeStateDataService as removeRuntimeStateData }
	from './remove-runtime-state-data.service';


@Injectable({providedIn: 'root'})

export class RemoveCachedDataService implements IDoThis {

	constructor(private __localStorage: LocalStorageService) {
	}


	go() {
		removeRuntimeStateData.go();
		this.__localStorage.unsetAll();
	}

}
