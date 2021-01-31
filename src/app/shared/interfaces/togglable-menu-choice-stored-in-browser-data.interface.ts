import { CheckableMenuChoiceData } // tslint:disable-next-line:max-line-length
	from '@action-menu/action-menu-choices/menu-choice/executable-menu-choice/checkable-menu-choice-data.interface';
import { ToggleSettingInBrowserStorageService }  // tslint:disable-next-line:max-line-length
	from '@encrypted-item-in-browser-storage/toggle-setting-in-browser-storage/toggle-setting-in-browser-storage.service';


export interface TogglableMenuChoiceStoredInBrowserData extends CheckableMenuChoiceData {

	toggleSetting: ToggleSettingInBrowserStorageService;

}
