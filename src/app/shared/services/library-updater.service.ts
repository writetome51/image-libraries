import { DBLibrary } from '@interfaces/db-library';
import { Injectable } from '@angular/core';
import { MongoDBRealmService } from '@services/mongo-db-realm.service';
import { SessionIDInBrowserStorageService }
	from '@item-in-browser-storage/session-id-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class LibraryUpdaterService {

	constructor(
		private __realm: MongoDBRealmService,
		private __localSessionID: SessionIDInBrowserStorageService
	) {
	}


	async update(
		libName: string,
		changes: object // The keys in `changes` can contain dot-notation.
	): Promise<DBLibrary | { error: { message: string } }> {
		return await this.__realm.callFn('pub_updateAndReturnLibrary', {
			name: libName,
			changes,
			sessionID: this.__localSessionID.get()
		});
	}

}
