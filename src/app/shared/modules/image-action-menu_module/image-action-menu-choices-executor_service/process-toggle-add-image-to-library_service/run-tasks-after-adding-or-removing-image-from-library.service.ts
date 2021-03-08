import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { DBLibrary } from '@interfaces/db-library.interface';
import { LibrariesInBrowserStorageService }
	from '@browser-storage/libraries-in-browser-storage.service';
import { ImageActionMenuServicesModule } from '../../image-action-menu-services.module';
import { LoadedLibraryInBrowserStorageService }
	from '@browser-storage/loaded-library-in-browser-storage.service';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class RunTasksAfterAddingOrRemovingImageFromLibraryService implements IDoThis {

	constructor(
		private __librariesInBrowser: LibrariesInBrowserStorageService,
		private __loadedLibrary: LoadedLibraryInBrowserStorageService
	) {
	}


	go(updatedLibrary: DBLibrary) {
		this.__updateLocalLibraries(updatedLibrary);
		this.__updateLoadedLibrary_ifNecessary(updatedLibrary);
	}


	private __updateLocalLibraries(updatedLibrary) {
		let libraries = this.__librariesInBrowser.get();
		libraries[updatedLibrary.name] = updatedLibrary;
		this.__librariesInBrowser.set(libraries);
	}


	private __updateLoadedLibrary_ifNecessary(updatedLibrary) {
		let currentLibrary = this.__loadedLibrary.get();
		if (hasValue(currentLibrary) && (currentLibrary.name === updatedLibrary.name)) {
			this.__loadedLibrary.set(updatedLibrary);
		}
	}

}
