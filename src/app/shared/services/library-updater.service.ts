import { DBLibrary } from '@interfaces/db-library';
import { Injectable } from '@angular/core';
import { MongoDBRealmFunctionService } from '@services/mongo-db-realm-function.service';
import { SessionIDInBrowserStorageService }
	from '@item-in-browser-storage/session-id-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class LibraryUpdaterService {

	constructor(
		private __realmFn: MongoDBRealmFunctionService,
		private __sessionIDInBrowser: SessionIDInBrowserStorageService
	) {
	}


	async update(
		libName: string,
		changes: object // The keys in `changes` can contain dot-notation.
	): Promise<DBLibrary | { error: { message: string } }> {
		return await this.__realmFn.call('pub_updateAndReturnLibrary', {
			name: libName,
			changes,
			sessionID: this.__sessionIDInBrowser.get()
		});
	}

}
