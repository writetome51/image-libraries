import { Injectable } from '@angular/core';
import { LibraryStorageService } from '@services/library-storage.service';
import { DBLibrary } from '@interfaces/db-library';
import { RequestedLibraryData as requestedLibrary }
	from '@runtime-state-data/requested-library.data';
import { IDoThis } from '@interfaces/i-do-this';


@Injectable({providedIn: 'root'})
export class GetRequestedLibraryService implements IDoThis {

	constructor(private __libraryStorage: LibraryStorageService) {
	}


	async go(): Promise<DBLibrary | { error: { message: string } }> {
		return await this.__libraryStorage.get(requestedLibrary.name);
	}

}
