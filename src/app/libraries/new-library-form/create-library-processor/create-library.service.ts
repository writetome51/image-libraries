import { DBLibrary } from '@interfaces/db-library.interface';
import { Injectable } from '@angular/core';
import { SessionIDInBrowserStorageService }
	from '@item-in-browser-storage/session-id-in-browser-storage.service';
import { MongoDBRealmFunctionService } from '@services/mongo-db-realm-function.service';
import { NewLibraryData as newLibrary } from '@runtime-state-data/new-library.data';
import { IDoThis } from '@interfaces/i-do-this.interface';


@Injectable({providedIn: 'root'})
export class CreateLibraryService implements IDoThis {

	constructor(
		private __realmFn: MongoDBRealmFunctionService,
		private __sessionIDInBrowser: SessionIDInBrowserStorageService
	) {
	}


	async go(): Promise<DBLibrary | { error: { message: string } }> {
		return await this.__realmFn.call('pub_createAndReturnLibrary', {
			name: newLibrary.name,
			sessionID: this.__sessionIDInBrowser.get()
		});
	}

}
