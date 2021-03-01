import { CurrentUserData as currentUser }
	from '@runtime-state-data/static-classes/current-user.data';
import { DBUser } from '@interfaces/db-user.interface';
import { HasError } from '@interfaces/has-error.interface';
import { Injectable } from '@angular/core';
import { MongoDBRealmFunctionService } from '@services/mongo-db-realm-function.service';
import { SessionIDInBrowserStorageService }
	from '@encrypted-item-in-browser-storage/session-id-in-browser-storage.service';


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


	async get(): Promise<DBUser | HasError> {
		return await this.__realmFn.call('pub_getUser',
			{sessionID: this.__sessionIDInBrowser.get()}
		);
	}

}
