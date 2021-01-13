import { Injectable } from '@angular/core';
import { SessionIDInBrowserStorageService }
	from '@item-in-browser-storage/session-id-in-browser-storage.service';
import { MongoDBRealmService } from '@services/mongo-db-realm.service';


@Injectable({providedIn: 'root'})
export class DeAuthenticatorService {

	constructor(
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
		private __realm: MongoDBRealmService
	) {
	}


	async deAuthenticate(): Promise<{ success: true } | { error: { message: string } }> {
		return await this.__realm.callFn('pub_logoutUser',
			{sessionID: this.__sessionIDInBrowser.get()}
		);
	}

}
