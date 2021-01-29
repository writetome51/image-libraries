import { Injectable } from '@angular/core';
import { MongoDBRealmFunctionService } from '@services/mongo-db-realm-function.service';
import { SearchData as search } from '@runtime-state-data/search.data';
import { SearchService } from '@search/search-processor/search.service';
import { SessionIDInBrowserStorageService }
	from '@item-in-browser-storage/session-id-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class SearchLibrariesService implements SearchService {

	constructor(
		private __realmFn: MongoDBRealmFunctionService,
		private __sessionIDInBrowser: SessionIDInBrowserStorageService
	) {
	}


	async go(): Promise<object[] | { error: { message: string } }> {
		return await this.__realmFn.call('pub_searchLibraries', {
			searchText: search.text,
			sessionID: this.__sessionIDInBrowser.get()
		});
	}

}
