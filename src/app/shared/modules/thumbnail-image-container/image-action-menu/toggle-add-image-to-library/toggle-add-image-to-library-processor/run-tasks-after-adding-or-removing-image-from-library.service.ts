import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { DBLibrary } from '@interfaces/db-library.interface';
import { LibrariesInBrowserStorageService }
	from '@encrypted-item-in-browser-storage/libraries-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class RunTasksAfterAddingOrRemovingImageFromLibraryService implements IDoThis {

	constructor(private __librariesInBrowser: LibrariesInBrowserStorageService) {
	}


	go(lib: DBLibrary) {
		this.__updateLocalLibraries(lib);
	}


	private __updateLocalLibraries(lib) {
		let libraries = this.__librariesInBrowser.get();
		libraries[lib.name] = lib;
		this.__librariesInBrowser.set(libraries);
	}

}
