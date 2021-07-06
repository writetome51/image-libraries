import { Injectable } from '@angular/core';
import { SearchData as search } from '@runtime-state-data/search.data';
import { LibrariesInBrowserStorageService }
	from '@browser-storage/libraries-in-browser-storage.service';
import { getByTest } from '@writetome51/array-get-by-test';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { LibrariesViewerServicesModule } from '../libraries-viewer-services.module';
import { SearchedLibraryNamesData as searchedLibraryNames } from '../searched-library-names.data';
import { isEmpty } from '@writetome51/is-empty-not-empty';
import { LibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';


@Injectable({providedIn: LibrariesViewerServicesModule})
export class SearchLibrariesService implements IDoThis {

	constructor(private __librariesInBrowser: LibrariesInBrowserStorageService) {}


	go(): void {
		searchedLibraryNames.data = getByTest(this.__test, libraryNames.data);
	}


	private __test(libName: string) {
		return libName.includes(search.text.toLowerCase());
	}

}
