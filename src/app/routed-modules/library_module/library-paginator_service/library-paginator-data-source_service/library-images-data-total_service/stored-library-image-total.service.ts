import { DBLibrary } from '@interfaces/db-library.interface';
import { Gettable } from '@interfaces/gettable.interface';
import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { LoadedLibraryInBrowserStorageService }
	from '@browser-storage/loaded-library-in-browser-storage.service';
import { LibraryServicesModule } from '../../../library-services.module';


@Injectable({providedIn: LibraryServicesModule})
export class StoredLibraryImageTotalService implements Gettable<number> {

	constructor(private __loadedLibrary: LoadedLibraryInBrowserStorageService) {
	}


	get(): number {
		let lib: DBLibrary = this.__loadedLibrary.get();
		if (hasValue(lib)) return lib._image_ids.length;
	}

}
