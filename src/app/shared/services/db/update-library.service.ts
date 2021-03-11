import { DBLibrary } from '@interfaces/db-library.interface';
import { Injectable } from '@angular/core';
import { MongoDBRealmFunctionService } from '@services/db/mongo-db-realm-function.service';
import { SessionIDInBrowserStorageService }
	from '@services/browser-storage/session-id-in-browser-storage.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { HasError } from '@interfaces/has-error.interface';


@Injectable({providedIn: 'root'})
export class UpdateLibraryService implements IDoThis {

	constructor(
		private __realmFn: MongoDBRealmFunctionService,
		private __sessionIDInBrowser: SessionIDInBrowserStorageService
	) {}


	async go(
		libName: string,
		changes: object // The keys in `changes` can contain dot-notation.
	): Promise<DBLibrary | HasError> {
		return await this.__realmFn.call('pub_updateAndReturnLibrary', {
			name: libName,
			changes,
			sessionID: this.__sessionIDInBrowser.get()
		});
	}

}
