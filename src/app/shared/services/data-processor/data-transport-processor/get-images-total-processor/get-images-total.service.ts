import { Injectable } from '@angular/core';
import { MongoDBRealmService } from '@services/mongo-db-realm.service';
import { RequestedLibraryData as requestedLibrary }
	from '@runtime-state-data/requested-library.data';
import { SessionIDInBrowserStorageService }
	from '@item-in-browser-storage/session-id-in-browser-storage.service';
import { LibrariesInBrowserStorageService }
	from '@item-in-browser-storage/libraries-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class GetImagesTotalService {

	constructor(
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
		private __librariesInBrowser: LibrariesInBrowserStorageService,
		private __realm: MongoDBRealmService
	) {
	}


	async all(): Promise<{ dataTotal: number } | { error: { message: string } }> {
		return this.__realm.callFn('pub_getUserImagesTotal', {
			sessionID: this.__sessionIDInBrowser.get()
		});
	}


	async inLibrary(): Promise<{ dataTotal: number } | { error: { message: string } }> {
		try {
			let lib = this.__librariesInBrowser.get()[requestedLibrary.name];
			return {dataTotal: lib._image_ids.length};
		}
		catch (error) {
			return {error};
		}
	}

}
