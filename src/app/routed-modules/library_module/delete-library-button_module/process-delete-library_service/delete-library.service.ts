import { Injectable } from '@angular/core';
import { MongoDBRealmFunctionService } from '@services/db/mongo-db-realm-function.service';
import { SessionIDInBrowserStorageService }
	from '@browser-storage/session-id-in-browser-storage.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { HasError } from '@interfaces/has-error.interface';
import { DeleteLibraryButtonServicesModule } from '../delete-library-button-services.module';
import { LoadedLibraryInBrowserStorageService }
	from '@browser-storage/loaded-library-in-browser-storage.service';


@Injectable({providedIn: DeleteLibraryButtonServicesModule})
export class DeleteLibraryService implements IDoThis {

	constructor(
		private __realmFn: MongoDBRealmFunctionService,
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
		private __loadedLibrary: LoadedLibraryInBrowserStorageService
	) {}


	async go(): Promise<{ success: true } | HasError> {
		return await this.__realmFn.call('pub_deleteLibrary', {
			name: this.__loadedLibrary.get().name,
			sessionID: this.__sessionIDInBrowser.get()
		});
	}

}
