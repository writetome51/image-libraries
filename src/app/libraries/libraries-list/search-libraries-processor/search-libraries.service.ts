import { Injectable } from '@angular/core';
import { SearchData as search } from '@runtime-state-data/search.data';
import { LibrariesInBrowserStorageService }
	from '@encrypted-item-in-browser-storage/libraries-in-browser-storage.service';
import { getByTest } from '@writetome51/array-get-by-test';
import { HasError } from '@interfaces/has-error.interface';


@Injectable({providedIn: 'root'})
export class SearchLibrariesService {

	constructor(private __librariesInBrowser: LibrariesInBrowserStorageService) {
	}


	async go(): Promise<string[] | HasError> {
		let libsMap: object = this.__librariesInBrowser.get();
		return getByTest(
			(libName: string) => libName.includes(search.text.toLowerCase()),
			Object.keys(libsMap)
		);
	}

}
