import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this';
import { DBLibrary } from '@interfaces/db-library';
import { LibrariesInBrowserStorageService }
	from '@item-in-browser-storage/libraries-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class RunTasksAfterAddingOrRemovingImageFromLibraryService implements IDoThis {

	constructor(private __localLibraries: LibrariesInBrowserStorageService) {
	}


	go(lib: DBLibrary) {
		this.__updateLocalLibraries(lib);
	}


	private __updateLocalLibraries(lib) {
		let libraries = this.__localLibraries.get();
		libraries[lib.name] = lib;
		this.__localLibraries.set(libraries);
	}

}
