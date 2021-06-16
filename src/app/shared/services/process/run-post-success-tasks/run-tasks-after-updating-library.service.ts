import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { LibraryRecord } from '@interfaces/library-record.interface';
import { LibrariesInBrowserStorageService }
	from '@browser-storage/libraries-in-browser-storage.service';
import { LoadedLibraryInBrowserStorageService }
	from '@browser-storage/loaded-library-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class RunTasksAfterAddingOrRemovingImageFromLibraryService implements IDoThis {

	constructor(
		private __librariesInBrowser: LibrariesInBrowserStorageService,
		private __loadedLibrary: LoadedLibraryInBrowserStorageService
	) {}


	go(updatedLibrary: LibraryRecord) {
		this.__updateLocalLibraries(updatedLibrary);
		this.__updateLoadedLibrary_ifNecessary(updatedLibrary);
	}


	private __updateLocalLibraries(updatedLibrary) {
		let libraries = this.__librariesInBrowser.get();
		libraries[updatedLibrary.name] = updatedLibrary;
		this.__librariesInBrowser.set(libraries);

		console.log('updated local libraries');
	}


	private __updateLoadedLibrary_ifNecessary(updatedLibrary) {
		let currentLibrary = this.__loadedLibrary.get();
		if (hasValue(currentLibrary) && (currentLibrary.name === updatedLibrary.name)) {
			this.__loadedLibrary.set(updatedLibrary);

			console.log('updated loaded library');
		}
	}

}
