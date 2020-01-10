import { Injectable } from '@angular/core';
import { IDoThis } from '../interfaces/i-do-this';
import { LocalStorageService } from './local-data/local-storage.service';
import { RuntimeStateDataService } from './runtime-state-data.service';


@Injectable({providedIn: 'root'})

export class RemoveCachedDataService implements IDoThis {

	constructor(
		private __runtimeStateData: RuntimeStateDataService,
		private __localStorage: LocalStorageService
	) {
	}


	go() {
		this.__runtimeStateData.unset();
		this.__localStorage.removeAll();
	}

}
