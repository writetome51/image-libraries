import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { LibraryRecord } from '@interfaces/library-record.interface';
import { LibrariesInBrowserStorageService }
	from '@browser-storage/libraries-in-browser-storage.service';
import { LoadedLibraryInBrowserStorageService }
	from '@browser-storage/loaded-library-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class UpdateLibrariesInBrowserStorageService implements IDoThis {

	constructor(
		private __librariesInBrowser: LibrariesInBrowserStorageService,
		private __loadedLibrary: LoadedLibraryInBrowserStorageService
	) {}


	go(updatedLibrary: LibraryRecord) {

		let libraries = this.__librariesInBrowser.get();
		libraries[updatedLibrary.name] = updatedLibrary;
		this.__librariesInBrowser.set(libraries);

		this.__updateLoadedLibrary_ifNecessary(updatedLibrary);
	}


	private __updateLoadedLibrary_ifNecessary(updatedLibrary) {
		if (this.__isCurrentlyLoadedLibrary(updatedLibrary)) {
			this.__loadedLibrary.set(updatedLibrary);
		}
	}


	private __isCurrentlyLoadedLibrary(updatedLibrary) {
		let currentLibrary = this.__loadedLibrary.get();
		return (hasValue(currentLibrary) && (currentLibrary.name === updatedLibrary.name))
	}

}
