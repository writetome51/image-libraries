import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { ResetRuntimeStateDataToDefaultSettingsService }
	from '../reset-runtime-state-data-to-default-settings.service';
import { RemoveBrowserStorageService as removeBrowserStorage }
	from './remove-browser-storage.service';


@Injectable({providedIn: 'root'})
export class RemoveCachedDataService implements IDoThis {

	constructor(
		private __resetRuntimeStateDataToDefaults: ResetRuntimeStateDataToDefaultSettingsService
	) {}


	go() {
		this.__resetRuntimeStateDataToDefaults.go();
		removeBrowserStorage.go();
	}

}
