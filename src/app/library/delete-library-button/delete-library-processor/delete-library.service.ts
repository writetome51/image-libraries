import { Injectable } from '@angular/core';
import { MongoDBRealmFunctionService } from '@services/mongo-db-realm-function.service';
import { SessionIDInBrowserStorageService }
	from 'encrypted-item-in-browser-storage/session-id-in-browser-storage.service';
import { LoadedLibraryData as loadedLibrary }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { IDoThis } from '@interfaces/i-do-this.interface';


@Injectable({providedIn: 'root'})
export class DeleteLibraryService implements IDoThis {

	constructor(
		private __realmFn: MongoDBRealmFunctionService,
		private __sessionIDInBrowser: SessionIDInBrowserStorageService
	) {
	}


	async go(): Promise<{ success: true } | { error: { message: string } }> {
		return await this.__realmFn.call('pub_deleteLibrary', {
			name: loadedLibrary.libName,
			sessionID: this.__sessionIDInBrowser.get()
		});
	}

}
