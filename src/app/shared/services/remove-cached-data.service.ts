import { IDoThis } from '@interfaces/i-do-this.interface';
import { ResetRuntimeStateDataToDefaultSettingsService }
	from './reset-runtime-state-data-to-default-settings.service';
import { RemoveBrowserStorageService as removeBrowserStorage }
	from '@services/remove-browser-storage.service';
import { Injectable } from '@angular/core';


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
