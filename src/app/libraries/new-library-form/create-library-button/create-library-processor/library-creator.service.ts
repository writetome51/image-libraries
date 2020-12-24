import { DBLibrary } from '@interfaces/db-library';
import { Injectable } from '@angular/core';
import { LocalSessionIDService }
	from '@services/item-in-browser-storage/item-in-local-storage/local-session-id.service';
import { MongoDBRealmService } from '@services/mongo-db-realm.service';
import { NewLibraryData as newLibrary } from '@runtime-state-data/new-library.data';


@Injectable({providedIn: 'root'})
export class LibraryCreatorService {

	constructor(
		private __realm: MongoDBRealmService,
		private __localSessionID: LocalSessionIDService
	) {
	}


	async create(): Promise<DBLibrary | { error: { message: string } }> {
		return await this.__realm.callFn('pub_createAndReturnLibrary', {
			name: newLibrary.name,
			sessionID: this.__localSessionID.get()
		});
	}

}
