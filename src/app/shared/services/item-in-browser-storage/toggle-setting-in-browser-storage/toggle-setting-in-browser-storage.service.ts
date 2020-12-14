import { hasValue } from '@writetome51/has-value-no-value';
import { ItemInBrowserStorageService }
	from '@services/item-in-browser-storage/item-in-browser-storage.service';


export abstract class ToggleSettingInBrowserStorageService
	extends ItemInBrowserStorageService<{ enabled: boolean }> {

	constructor(__storage, __key) {
		super(__storage, __key);
	}


	get(): { enabled: boolean } {
		let value = super.get();
		if (hasValue(value)) {
			return value;
		}
		else {
			let data = {enabled: false};
			this.set(data);

			return data;
		}
	}


}
