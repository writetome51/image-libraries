import { ItemInBrowserStorageService } from '../item-in-browser-storage.service';


export abstract class ItemInSessionStorageService<T> extends ItemInBrowserStorageService<T> {

	constructor(__key: string) {
		super(sessionStorage, __key);
	}

}
