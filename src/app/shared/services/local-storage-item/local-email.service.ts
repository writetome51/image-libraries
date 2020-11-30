import { Injectable } from '@angular/core';
import { ItemInLocalStorageService } from '@services/local-storage-item/item-in-local-storage.service';


@Injectable({providedIn: 'root'})

export class LocalEmailService extends ItemInLocalStorageService {

	constructor() {
		super('eml');
	}

}
