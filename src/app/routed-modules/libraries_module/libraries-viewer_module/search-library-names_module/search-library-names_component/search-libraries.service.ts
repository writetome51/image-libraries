import { getByTest } from '@writetome51/array-get-by-test';
import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { LibrariesInBrowserStorageService }
	from '@browser-storage/libraries-in-browser-storage.service';
import {
	LibraryNamesData as libraryNames,
	LibraryNameSearchResultsData as libNameSearchResults,
	SearchData as search
}
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { SearchLibraryNamesServicesModule } from '../search-library-names-services.module';


@Injectable({providedIn: SearchLibraryNamesServicesModule})
export class SearchLibrariesService implements IDoThis {

	constructor(private __librariesInBrowser: LibrariesInBrowserStorageService) {}


	go(): void {
		search.text.length ?
			libNameSearchResults.data = getByTest(this.__test, libraryNames.data) :
			libNameSearchResults.data = undefined;
	}


	private __test(libName: string) {
		return libName.includes(search.text.toLowerCase());
	}

}
