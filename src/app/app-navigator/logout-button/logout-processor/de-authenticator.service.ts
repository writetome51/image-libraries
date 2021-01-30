import { Injectable } from '@angular/core';
import { SessionIDInBrowserStorageService }
	from 'encrypted-item-in-browser-storage/session-id-in-browser-storage.service';
import { MongoDBRealmFunctionService } from '@services/mongo-db-realm-function.service';


@Injectable({providedIn: 'root'})
export class DeAuthenticatorService {

	constructor(
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
		private __realmFn: MongoDBRealmFunctionService
	) {
	}


	async deAuthenticate(): Promise<{ success: true } | { error: { message: string } }> {
		return await this.__realmFn.call('pub_logoutUser',
			{sessionID: this.__sessionIDInBrowser.get()}
		);
	}

}
