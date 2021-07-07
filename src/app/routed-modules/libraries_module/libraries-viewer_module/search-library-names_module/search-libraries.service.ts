import { getByTest } from '@writetome51/array-get-by-test';
import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { LibrariesInBrowserStorageService }
	from '@browser-storage/libraries-in-browser-storage.service';
import { LibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { SearchData as search } from '@runtime-state-data/search.data';
import { SearchedLibraryNamesData as searchedLibraryNames } from '../searched-library-names.data';
import { SearchLibraryNamesServicesModule } from './search-library-names-services.module';


@Injectable({providedIn: SearchLibraryNamesServicesModule})
export class SearchLibrariesService implements IDoThis {

	constructor(private __librariesInBrowser: LibrariesInBrowserStorageService) {}


	go(): void {
		searchedLibraryNames.data = getByTest(this.__test, libraryNames.data);
	}


	private __test(libName: string) {
		return libName.includes(search.text.toLowerCase());
	}

}
