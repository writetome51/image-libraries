import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { LibraryRecord } from '@interfaces/library-record.interface';
import { LibrariesInBrowserStorageService }
	from '@browser-storage/libraries-in-browser-storage.service';
import { LoadedLibraryInBrowserStorageService }
	from '@browser-storage/loaded-library-in-browser-storage.service';
import { AlertsService as alerts } from '@services/alerts.service';


@Injectable({providedIn: 'root'})
export class RunTasksAfterUpdatingLibraryService implements IDoThis {

	constructor(
		private __librariesInBrowser: LibrariesInBrowserStorageService,
		private __loadedLibrary: LoadedLibraryInBrowserStorageService
	) {}


	go(updatedLibrary: LibraryRecord) {
		// for security:
		delete updatedLibrary._id;
		delete updatedLibrary._user_id;

		this.__updateLocalLibraries(updatedLibrary);
		this.__updateLoadedLibrary_ifNecessary(updatedLibrary);

		alerts.setSuccess('Library updated');
	}


	private __updateLocalLibraries(updatedLibrary) {
		let libraries = this.__librariesInBrowser.get();
		libraries[updatedLibrary.name] = updatedLibrary;
		this.__librariesInBrowser.set(libraries);

		console.log('updated local libraries');
	}


	private __updateLoadedLibrary_ifNecessary(updatedLibrary) {
		if (this.__isCurrentlyLoadedLibrary(updatedLibrary)) {
			this.__loadedLibrary.set(updatedLibrary);

			console.log('updated loaded library');
		}
	}


	private __isCurrentlyLoadedLibrary(updatedLibrary) {
		let currentLibrary = this.__loadedLibrary.get();
		return (hasValue(currentLibrary) && (currentLibrary.name === updatedLibrary.name))
	}

}
