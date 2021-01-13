import { DBLibrary } from '@interfaces/db-library';
import { Injectable } from '@angular/core';
import { SessionIDInBrowserStorageService }
	from '@item-in-browser-storage/session-id-in-browser-storage.service';
import { MongoDBRealmService } from '@services/mongo-db-realm.service';
import { NewLibraryData as newLibrary } from '@runtime-state-data/new-library.data';


@Injectable({providedIn: 'root'})
export class LibraryCreatorService {

	constructor(
		private __realm: MongoDBRealmService,
		private __sessionIDInBrowser: SessionIDInBrowserStorageService
	) {
	}


	async create(): Promise<DBLibrary | { error: { message: string } }> {
		return await this.__realm.callFn('pub_createAndReturnLibrary', {
			name: newLibrary.name,
			sessionID: this.__sessionIDInBrowser.get()
		});
	}

}
