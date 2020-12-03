import { ItemInBrowserStorageService } from '../item-in-browser-storage.service';


export abstract class ItemInLocalStorageService extends ItemInBrowserStorageService {

	constructor(__key: string) {
		super(localStorage, __key);
	}

}
