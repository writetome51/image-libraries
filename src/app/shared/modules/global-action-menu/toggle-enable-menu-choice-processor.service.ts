import { DirectProcessor } from '@interfaces/direct-processor';
import { ToggleSettingInBrowserStorageService }
	from '@toggle-setting-in-browser-storage/toggle-setting-in-browser-storage.service';
import { Injectable } from '@angular/core';


@Injectable()
export class ToggleEnableMenuChoiceProcessorService implements DirectProcessor {

	process(data: {
		toggleSetting: ToggleSettingInBrowserStorageService,
		checked: boolean
	}) {
		let setting: { enabled: boolean } = data.toggleSetting.get();

		setting.enabled = !(setting.enabled);
		data.checked = setting.enabled;

		data.toggleSetting.set(setting);
	};

}
