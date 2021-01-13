import { DBLibrary } from '@interfaces/db-library';
import { Injectable } from '@angular/core';
import { SessionIDInBrowserStorageService }
	from '@item-in-browser-storage/session-id-in-browser-storage.service';
import { MongoDBRealmService } from '@services/mongo-db-realm.service';


@Injectable({providedIn: 'root'})
export class LibraryStorageService {

	constructor(
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
		private __realm: MongoDBRealmService
	) {
	}


	async get(libName: string): Promise<DBLibrary | { error: { message: string } }> {
		return await this.__realm.callFn('pub_getLibrary', {
			name: libName,
			sessionID: this.__sessionIDInBrowser.get()
		});
	}


	async getAll(): Promise<DBLibrary[] | { error: { message: string } }> {
		return await this.__realm.callFn('pub_getLibraries', {
			sessionID: this.__sessionIDInBrowser.get()
		});
	}

}
