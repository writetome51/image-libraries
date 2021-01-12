import { Injectable } from '@angular/core';
import { MongoDBRealmService } from '@services/mongo-db-realm.service';
import { RequestedLibraryData as requestedLibrary }
	from '@runtime-state-data/requested-library.data';
import { LocalSessionIDService } from '@services/item-in-browser-storage/local-session-id.service';


@Injectable({providedIn: 'root'})
export class GetImagesTotalService {

	constructor(
		private __localSessionID: LocalSessionIDService,
		private __realm: MongoDBRealmService
	) {
	}


	async all(): Promise<{ dataTotal: number } | { error: { message: string } }> {
		return this.__realm.callFn('pub_getUserImagesTotal', {
			sessionID: this.__localSessionID.get()
		});
	}


	async inLibrary(): Promise<{ dataTotal: number } | { error: { message: string } }> {
		return this.__realm.callFn('pub_getLibraryImagesTotal', {
			sessionID: this.__localSessionID.get(),
			name: requestedLibrary.name
		});
	}

}
