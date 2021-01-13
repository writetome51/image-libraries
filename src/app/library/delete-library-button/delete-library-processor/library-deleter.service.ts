import { Injectable } from '@angular/core';
import { MongoDBRealmService } from '@services/mongo-db-realm.service';
import { SessionIDInBrowserStorageService }
	from '@item-in-browser-storage/session-id-in-browser-storage.service';
import { LoadedLibraryData as loadedLibrary }
	from '@runtime-state-data/static-classes/auto-resettable.data';


@Injectable({providedIn: 'root'})
export class LibraryDeleterService {

	constructor(
		private __realm: MongoDBRealmService,
		private __sessionIDInBrowser: SessionIDInBrowserStorageService
	) {
	}


	async delete(): Promise<{ success: true } | { error: { message: string } }> {
		return await this.__realm.callFn('pub_deleteLibrary', {
			name: loadedLibrary.libName,
			sessionID: this.__sessionIDInBrowser.get()
		});
	}

}
