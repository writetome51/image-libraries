import { Injectable } from '@angular/core';
import { DBLibrary } from '@interfaces/db-library';
import { LibraryStorageService } from '@services/library/library-storage.service';
import { NewLibraryData as newLibrary } from '@runtime-state-data/new-library.data';


@Injectable({providedIn: 'root'})

export class LibraryCreatorService {


	constructor(private __libraryStorage: LibraryStorageService) {
	}


	async create(): Promise<DBLibrary | { error: { message: string } }> {
		return this.__libraryStorage.create(newLibrary.name);
	}


}