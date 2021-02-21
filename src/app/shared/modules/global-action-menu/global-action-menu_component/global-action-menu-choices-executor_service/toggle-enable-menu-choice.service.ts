import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this/i-do-this.interface';
import { TogglableMenuChoiceData }
	from '@interfaces/togglable-menu-choice-data.interface';
import { GlobalActionMenuServicesModule }
	from '@global-action-menu/global-action-menu-services.module';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class ToggleEnableMenuChoiceService implements IDoThis {

	go(data: TogglableMenuChoiceData) {

		let setting: { enabled: boolean } = data.toggleSetting.get();

		setting.enabled = !(setting.enabled);
		data.checked = setting.enabled;

		data.toggleSetting.set(setting);
	}

}