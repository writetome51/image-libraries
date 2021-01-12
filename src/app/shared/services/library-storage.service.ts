import { DBLibrary } from '@interfaces/db-library';
import { Injectable } from '@angular/core';
import { LocalSessionIDService }
	from '@services/item-in-browser-storage/local-session-id.service';
import { MongoDBRealmService } from '@services/mongo-db-realm.service';


@Injectable({providedIn: 'root'})
export class LibraryStorageService {

	constructor(
		private __localSessionID: LocalSessionIDService,
		private __realm: MongoDBRealmService
	) {
	}


	async get(libName: string): Promise<DBLibrary | { error: { message: string } }> {
		return await this.__realm.callFn('pub_getLibrary', {
			name: libName,
			sessionID: this.__localSessionID.get()
		});
	}


	async getAll(): Promise<DBLibrary[] | { error: { message: string } }> {
		return await this.__realm.callFn('pub_getLibraries', {
			sessionID: this.__localSessionID.get()
		});
	}

}