import { LibraryRecord } from '@interfaces/library-record.interface';
import { Injectable } from '@angular/core';
import { SessionIDInBrowserStorageService }
	from '@services/browser-storage/session-id-in-browser-storage.service';
import { MongoDBRealmFunctionService } from '@services/db/mongo-db-realm-function.service';
import { HasError } from '@interfaces/has-error.interface';
import { NewLibraryFormServicesModule } from '../new-library-form-services.module';
import { GetResult } from '@interfaces/get-result.interface';


@Injectable({providedIn: NewLibraryFormServicesModule})
export class CreateLibraryService implements GetResult {

	constructor(
		private __realmFn: MongoDBRealmFunctionService,
		private __sessionIDInBrowser: SessionIDInBrowserStorageService
	) {}


	async go(libName): Promise<LibraryRecord | HasError> {
		return await this.__realmFn.call('pub_createAndReturnLibrary', {
			name: libName,
			sessionID: this.__sessionIDInBrowser.get()
		});
	}

}
