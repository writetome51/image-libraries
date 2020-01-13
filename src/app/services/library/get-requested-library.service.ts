import { DBLibrary } from '../../interfaces/db-library';
import { Injectable } from '@angular/core';
import { IDoThis } from '../../interfaces/i-do-this';
import { LibraryNameService } from './library-name.service';
import { LibraryStorageService } from './library-storage.service';
import { not } from '@writetome51/not';


@Injectable({providedIn: 'root'})

export class GetRequestedLibraryService implements IDoThis {

	constructor(private __libraryStorage: LibraryStorageService) {
	}


	async go(libraryName): Promise<DBLibrary | void> {
		LibraryNameService.data = libraryName;

		let result: any = await this.__libraryStorage.get();
		if (not(result.error)) return result;
	}

}
