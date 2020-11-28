import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this';
import { ResetRuntimeStateDataToDefaultSettingsService as resetRuntimeStateDataToDefaults }
	from './reset-runtime-state-data-to-default-settings.service';


@Injectable({providedIn: 'root'})

export class RemoveCachedDataService implements IDoThis {

	go() {
		resetRuntimeStateDataToDefaults.go();
		localStorage.clear();
	}

}
