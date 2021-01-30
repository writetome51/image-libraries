import { DBLibrary } from '@interfaces/db-library.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { LibrariesInBrowserStorageService }
	from 'encrypted-item-in-browser-storage/libraries-in-browser-storage.service';
import { LibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';


@Injectable({providedIn: 'root'})
export class RunTasksAfterGettingLibrariesService implements IDoThis {

	constructor(private __localLibraries: LibrariesInBrowserStorageService) {
	}


	async go(libraries: DBLibrary[]) {
		this.__storeLibrariesLocally(libraries);
	}


	private __storeLibrariesLocally(libraries) {
		let libsMap = {};
		for (let i = 0, length = libraries.length; i < length; ++i) {
			libsMap[libraries[i].name] = libraries[i];
		}
		this.__localLibraries.set(libsMap);
		libraryNames.data = Object.keys(libsMap);
	}

}
