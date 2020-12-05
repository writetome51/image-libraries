import { DBLibrary } from '@interfaces/db-library';
import { IDoThis } from '@interfaces/i-do-this';
import { Injectable } from '@angular/core';
import { LocalLibrariesService }
	from '@services/item-in-browser-storage/item-in-local-storage/local-libraries.service';
import { LibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';


@Injectable({providedIn: 'root'})

export class RunTasksAfterGettingLibrariesService implements IDoThis {

	constructor(private __localLibraries: LocalLibrariesService) {
	}


	async go(libraries: DBLibrary[]) {
		libraryNames.data = libraries.map((library: DBLibrary) => library.name);
		this.__storeLibrariesInBrowser(libraries);
	}


	private __storeLibrariesInBrowser(libraries) {
		let libsMap = {};
		for (let i = 0, length = libraries.length; i < length; ++i) {
			libsMap[libraries[i].name] = libraries[i];
		}
		this.__localLibraries.set(libsMap);
	}

}
