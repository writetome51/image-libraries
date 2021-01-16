import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { TogglableMenuChoiceStoredInBrowserData }
	from '@interfaces/togglable-menu-choice-stored-in-browser-data.interface';


@Injectable()
export class ToggleEnableMenuChoiceService implements IDoThis {

	go(data: TogglableMenuChoiceStoredInBrowserData) {

		let setting: { enabled: boolean } = data.toggleSetting.get();

		setting.enabled = !(setting.enabled);
		data.checked = setting.enabled;

		data.toggleSetting.set(setting);
	}

}
