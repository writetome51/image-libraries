import { ItemInBrowserStorageService } from '../item-in-browser-storage.service';


export abstract class ItemInLocalStorageService<T> extends ItemInBrowserStorageService<T> {

	constructor(__key: string) {
		super(localStorage, __key);
	}

}
