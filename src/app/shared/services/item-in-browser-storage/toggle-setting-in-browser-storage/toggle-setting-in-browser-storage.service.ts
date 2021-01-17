import { hasValue } from '@writetome51/has-value-no-value';
import { ItemInBrowserStorageService } from '../item-in-browser-storage.service';


export abstract class ToggleSettingInBrowserStorageService
	extends ItemInBrowserStorageService<{ enabled: boolean }> {

	get(): { enabled: boolean } {
		let value = super.get();
		if (hasValue(value)) return value;
		else {
			let data = {enabled: false};
			this.set(data);
			return data;
		}
	}

}
