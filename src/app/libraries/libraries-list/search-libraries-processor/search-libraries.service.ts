import { Injectable } from '@angular/core';
import { SearchService } from '@search/search-processor/search.service';
import { SearchData as search } from '@runtime-state-data/search.data';
import { LibrariesInBrowserStorageService }
	from '@encrypted-item-in-browser-storage/libraries-in-browser-storage.service';
import { getByTest } from '@writetome51/array-get-by-test';


@Injectable({providedIn: 'root'})
export class SearchLibrariesService implements SearchService {

	constructor(private __librariesInBrowser: LibrariesInBrowserStorageService) {
	}


	async go(): Promise<string[] | { error: { message: string } }> {
		let libsMap: object = this.__librariesInBrowser.get();
		return getByTest(
			(libName: string) => libName.includes(search.text.toLowerCase()),
			Object.keys(libsMap)
		);
	}

}
