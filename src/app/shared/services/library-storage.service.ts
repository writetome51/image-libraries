import { DBLibrary } from '@interfaces/db-library';
import { Injectable } from '@angular/core';
import { SessionIDInBrowserStorageService }
	from '@item-in-browser-storage/session-id-in-browser-storage.service';
import { MongoDBRealmFunctionService } from '@services/mongo-db-realm-function.service';


@Injectable({providedIn: 'root'})
export class LibraryStorageService {

	constructor(
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
		private __realmFn: MongoDBRealmFunctionService
	) {
	}


	async get(libName: string): Promise<DBLibrary | { error: { message: string } }> {
		return await this.__realmFn.call('pub_getLibrary', {
			name: libName,
			sessionID: this.__sessionIDInBrowser.get()
		});
	}


	async getAll(): Promise<DBLibrary[] | { error: { message: string } }> {
		return await this.__realmFn.call('pub_getLibraries', {
			sessionID: this.__sessionIDInBrowser.get()
		});
	}

}
