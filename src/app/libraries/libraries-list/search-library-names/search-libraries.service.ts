import { Injectable } from '@angular/core';
import { SearchData as search } from '@runtime-state-data/search.data';
import { LibrariesInBrowserStorageService }
	from '@encrypted-item-in-browser-storage/libraries-in-browser-storage.service';
import { getByTest } from '@writetome51/array-get-by-test';
import { LibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { IDoThis } from '@interfaces/i-do-this.interface';


@Injectable({providedIn: 'root'})
export class SearchLibrariesService implements IDoThis {

	constructor(private __librariesInBrowser: LibrariesInBrowserStorageService) {
	}


	go(): void {
		let libsMap: object = this.__librariesInBrowser.get();

		libraryNames.data = getByTest(
			(libName: string) => libName.includes(search.text.toLowerCase()),
			Object.keys(libsMap)
		);
	}

}
