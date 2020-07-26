import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this';
import { LocalStorageService } from './local-storage.service';
import { ResetRuntimeStateDataToDefaultSettingsService as resetRuntimeStateData }
	from './reset-runtime-state-data-to-default-settings.service';


@Injectable({providedIn: 'root'})

export class RemoveCachedDataService implements IDoThis {

	constructor(private __localStorage: LocalStorageService) {
	}


	go() {
		resetRuntimeStateData.go();
		this.__localStorage.unsetAll();
	}

}
