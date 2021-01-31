import { CurrentUserData as currentUser }
	from '@runtime-state-data/static-classes/current-user.data';
import { DBUser } from '@interfaces/app-user/db-user.interface';
import { Injectable } from '@angular/core';
import { SessionIDInBrowserStorageService }
	from '@encrypted-item-in-browser-storage/session-id-in-browser-storage.service';
import { MongoDBRealmFunctionService } from '@services/mongo-db-realm-function.service';


@Injectable({providedIn: 'root'})
export class UserAccountService {

	constructor(
		private __realmFn: MongoDBRealmFunctionService,
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
	) {
	}


	async exists(): Promise<{ success: boolean }> {
		return await this.__realmFn.call('pub_userExists', {email: currentUser.email});
	}


	async get(): Promise<DBUser | { error: { message: string } }> {
		return await this.__realmFn.call('pub_getUser',
			{sessionID: this.__sessionIDInBrowser.get()}
		);
	}

}
