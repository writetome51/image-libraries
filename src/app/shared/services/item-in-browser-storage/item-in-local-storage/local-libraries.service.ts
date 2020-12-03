import { Injectable } from '@angular/core';
import { ItemInLocalStorageService } from './item-in-local-storage.service';


@Injectable({providedIn: 'root'})

export class LocalLibrariesService extends ItemInLocalStorageService {

	constructor() {
		super('libs');
	}

}
