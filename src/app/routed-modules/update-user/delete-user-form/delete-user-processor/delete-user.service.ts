import { CurrentUserData as currentUser }
	from '@runtime-state-data/static-classes/current-user.data';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { MongoDBRealmFunctionService } from '@services/mongo-db-realm-function.service';
import { SessionIDInBrowserStorageService }
	from '@encrypted-item-in-browser-storage/session-id-in-browser-storage.service';
import { HasError } from '@interfaces/has-error.interface';


@Injectable({providedIn: 'root'})
export class DeleteUserService implements IDoThis {

	constructor(
		private __realmFn: MongoDBRealmFunctionService,
		private __sessionIDInBrowser: SessionIDInBrowserStorageService
	) {
	}


	async go(): Promise<{ success: true } | HasError> {
		return await this.__realmFn.call('pub_deleteUser', {
			email: currentUser.email,
			password: currentUser.password,
			sessionID: this.__sessionIDInBrowser.get()
		});
	}

}
