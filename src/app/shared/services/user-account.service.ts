import { CurrentUserData as currentUser }
	from '@runtime-state-data/static-classes/current-user.data';
import { DBUser } from '@interfaces/db-user';
import { Injectable } from '@angular/core';
import { LocalSessionIDService }
	from '@services/item-in-browser-storage/item-in-local-storage/local-session-id.service';
import { MongoDBRealmService } from '@services/mongo-db-realm.service';


@Injectable({providedIn: 'root'})
export class UserAccountService {

	constructor(
		private __realm: MongoDBRealmService,
		private __localSessionID: LocalSessionIDService,
	) {
	}


	async exists(): Promise<{ success: boolean }> {
		return await this.__realm.callFn('pub_userExists', {email: currentUser.email});
	}


	async get(): Promise<DBUser | { error: { message: string } }> {
		return await this.__realm.callFn('pub_getUser', {sessionID: this.__localSessionID.get()});
	}

}
