import { DBLibrary } from '@interfaces/db-library';
import { IDoThis } from '@interfaces/i-do-this';
import { Injectable } from '@angular/core';
import { LocalLibrariesService }
	from '@services/item-in-browser-storage/local-libraries.service';
import { LibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';


@Injectable({providedIn: 'root'})
export class RunTasksAfterGettingLibrariesService implements IDoThis {

	constructor(private __localLibraries: LocalLibrariesService) {
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
