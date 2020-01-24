import { DBLibrary } from '../../interfaces/db-library';
import { Injectable } from '@angular/core';
import { IDoThis } from '../../interfaces/i-do-this';
import { LibraryStorageService } from './library-storage.service';
import { not } from '@writetome51/not';


@Injectable({providedIn: 'root'})

export class GetRequestedLibraryService implements IDoThis {

	constructor(private __libraryStorage: LibraryStorageService) {
	}


	async go(libraryName): Promise<DBLibrary | void> {

		let result: any = await this.__libraryStorage.get(libraryName);
		if (not(result.error)) return result;
	}

}
