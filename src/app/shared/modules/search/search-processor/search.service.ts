import { Injectable } from '@angular/core';
import { SessionIDInBrowserStorageService }
	from '@item-in-browser-storage/session-id-in-browser-storage.service';
import { MongoDBRealmFunctionService } from '@services/mongo-db-realm-function.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { SearchData as search } from '@runtime-state-data/search.data';


@Injectable({providedIn: 'root'})
export class SearchService implements IDoThis {

	constructor(
		private __realmFn: MongoDBRealmFunctionService,
		private __sessionIDInBrowser: SessionIDInBrowserStorageService
	) {
	}


	async go(): Promise<object[] | { error: { message: string } }> {
		return await this.__realmFn.call('pub_search', {
			searchText: search.text,
			sessionID: this.__sessionIDInBrowser.get()
		});
	}

}
