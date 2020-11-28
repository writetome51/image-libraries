import { IDoThis } from '@interfaces/i-do-this';
import { ResetRuntimeStateDataToDefaultSettingsService as resetRuntimeStateDataToDefaults }
	from './reset-runtime-state-data-to-default-settings.service';


export class RemoveCachedDataService { // implements IDoThis

	static go() {
		resetRuntimeStateDataToDefaults.go();
		localStorage.clear();
	}

}
