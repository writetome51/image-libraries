import { Injectable } from '@angular/core';
import { MongoDBRealmFunctionService } from '@services/mongo-db-realm-function.service';
import { SessionIDInBrowserStorageService }
	from 'encrypted-item-in-browser-storage/session-id-in-browser-storage.service';
import { IDoThis } from '@interfaces/i-do-this.interface';


@Injectable({providedIn: 'root'})
export class GetUserImageTotalService implements IDoThis {

	constructor(
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
		private __realmFn: MongoDBRealmFunctionService
	) {
	}


	async go(): Promise<{ dataTotal: number } | { error: { message: string } }> {
		return this.__realmFn.call('pub_getUserImagesTotal', {
			sessionID: this.__sessionIDInBrowser.get()
		});
	}

}
