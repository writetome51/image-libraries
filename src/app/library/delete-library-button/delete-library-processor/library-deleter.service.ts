import { Injectable } from '@angular/core';
import { MongoDBRealmService } from '@services/mongo-db-realm/mongo-db-realm.service';
import { LocalSessionIDService }
	from '@services/item-in-browser-storage/item-in-local-storage/local-session-id.service';
import { LoadedLibraryData as loadedLibrary }
	from '@runtime-state-data/static-classes/auto-resettable.data';


@Injectable({providedIn: 'root'})
export class LibraryDeleterService {

	constructor(
		private __realm: MongoDBRealmService,
		private __localSessionID: LocalSessionIDService
	) {
	}


	async delete(): Promise<{ success: true } | { error: { message: string } }> {
		return await this.__realm.callFn('pub_deleteLibrary', {
			name: loadedLibrary.libName,
			sessionID: this.__localSessionID.get()
		});
	}

}
