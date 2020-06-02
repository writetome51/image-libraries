import { Injectable } from '@angular/core';
import { LoadedLibraryData as loadedLibrary }
	from '../../../data-structures/runtime-state-data/static-classes/loaded-library.data';
import { LibraryStorageService } from './library-storage.service';


@Injectable({providedIn: 'root'})

export class LibraryDeleterService {


	constructor(
		private __libraryStorage: LibraryStorageService
	) {
	}

	// Right now you can only delete the library that's currently loaded.

	async delete(): Promise<any | { error: object }> {
		return await this.__libraryStorage.delete(loadedLibrary.libName);
	}


}
