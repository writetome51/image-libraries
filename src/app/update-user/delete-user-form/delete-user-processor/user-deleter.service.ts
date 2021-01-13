import { CurrentUserData as currentUser }
	from '@runtime-state-data/static-classes/current-user.data';
import { Injectable } from '@angular/core';
import { SessionIDInBrowserStorageService }
	from '@item-in-browser-storage/session-id-in-browser-storage.service';
import { MongoDBRealmService } from '@services/mongo-db-realm.service';


@Injectable({providedIn: 'root'})
export class UserDeleterService {

	constructor(
		private __realm: MongoDBRealmService,
		private __sessionIDInBrowser: SessionIDInBrowserStorageService
	) {
	}


	async delete(): Promise<{ success: true } | { error: { message: string } }> {
		return await this.__realm.callFn('pub_deleteUser', {
			email: currentUser.email,
			password: currentUser.password,
			sessionID: this.__sessionIDInBrowser.get()
		});
	}

}
