import { ToggleSettingInBrowserStorageService }
	from '@toggle-setting-in-browser-storage/toggle-setting-in-browser-storage.service';
import { CheckableMenuChoiceData }
	from '@action-menu/action-menu-choices/menu-choice/processable-menu-choice/checkable-menu-choice-data.interface';


export interface TogglableMenuChoiceStoredInBrowserData extends CheckableMenuChoiceData {

	toggleSetting: ToggleSettingInBrowserStorageService;

}
