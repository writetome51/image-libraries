import { Injectable } from '@angular/core';
import { LoadedLibraryData as loadedLibrary }
	from '../../../../data-structures/runtime-state-data/static-classes/resettable-to-default/loaded-library.data';
import { LibraryStorageService } from '../../../shared/services/library/library-storage.service';


@Injectable({providedIn: 'root'})

export class LibraryDeleterService {

	constructor(private __libraryStorage: LibraryStorageService) {
	}


	// Right now you can only delete the library that's currently loaded.

	async delete(): Promise<{ success: true } | { error: { message: string } }> {
		return await this.__libraryStorage.delete(loadedLibrary.libName);
	}

}
