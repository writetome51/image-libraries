import { LibraryRecord } from '@interfaces/library-record.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { LibrariesInBrowserStorageService }
	from '@services/browser-storage/libraries-in-browser-storage.service';
import { LibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { noValue } from '@writetome51/has-value-no-value';
import { setArray } from '@writetome51/set-array';


@Injectable({providedIn: 'root'})
export class RunTasksAfterGettingLibrariesService implements IDoThis {

	constructor(private __librariesInBrowser: LibrariesInBrowserStorageService) {}


	async go(libraries: LibraryRecord[]) {
		this.__storeLibrariesLocally(libraries);
	}


	private __storeLibrariesLocally(libraries) {
		let libsMap = {};
		for (let i = 0, length = libraries.length; i < length; ++i) {
			libsMap[libraries[i].name] = libraries[i];
		}
		this.__librariesInBrowser.set(libsMap);

		// The memory reference of libraryNames.data must not be broken, so, you can only assign
		// libraryNames.data a new value with '=' if it has no value yet:
		if (noValue(libraryNames.data)) libraryNames.data = [];

		// setArray() assigns new value without breaking memory reference.
		setArray(libraryNames.data, Object.keys(libsMap));
	}

}
