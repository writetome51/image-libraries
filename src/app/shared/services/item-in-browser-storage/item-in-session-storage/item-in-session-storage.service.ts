import { ItemInBrowserStorageService } from '../item-in-browser-storage.service';


export abstract class ItemInSessionStorageService extends ItemInBrowserStorageService {

	constructor(__key: string) {
		super(sessionStorage, __key);
	}

}
