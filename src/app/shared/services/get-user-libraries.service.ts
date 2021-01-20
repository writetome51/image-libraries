import { DBLibrary } from '@interfaces/db-library.interface';
import { Injectable } from '@angular/core';
import { SessionIDInBrowserStorageService }
	from '@item-in-browser-storage/session-id-in-browser-storage.service';
import { MongoDBRealmFunctionService } from '@services/mongo-db-realm-function.service';
import { IDoThis } from '@interfaces/i-do-this.interface';


@Injectable({providedIn: 'root'})
export class GetUserLibrariesService implements IDoThis {

	constructor(
		private __realmFn: MongoDBRealmFunctionService,
		private __sessionIDInBrowser: SessionIDInBrowserStorageService
	) {
	}


	async go(): Promise<DBLibrary[] | { error: { message: string } }> {
		return await this.__realmFn.call('pub_getLibraries', {
			sessionID: this.__sessionIDInBrowser.get()
		});
	}

}
