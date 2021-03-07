import { Injectable } from '@angular/core';
import { Gettable } from '@interfaces/gettable.interface';
import { hasValue } from '@writetome51/has-value-no-value';
import { LoadedLibraryInBrowserStorageService }
	from '@browser-storage/loaded-library-in-browser-storage.service';
import { DBLibrary } from '@interfaces/db-library.interface';


@Injectable({providedIn: 'root'})
export class StoredLibraryImageTotalService implements Gettable<number> {

	constructor(private __libraryInBrowser: LoadedLibraryInBrowserStorageService) {
	}


	get(): number {
		let lib: DBLibrary = this.__libraryInBrowser.get();
		if (hasValue(lib)) return lib._image_ids.length;
	}

}
