import { Injectable } from '@angular/core';
import { DBLibrary } from '@interfaces/db-library';
import { ItemInLocalStorageService } from './item-in-local-storage.service';


@Injectable({providedIn: 'root'})

export class LocalLibrariesService extends ItemInLocalStorageService {

	constructor() {
		super('libs');
	}


	get(): DBLibrary[] {
		try {
			return super.get();
		}
		catch (error) {
			return undefined;
		}
	}

}
