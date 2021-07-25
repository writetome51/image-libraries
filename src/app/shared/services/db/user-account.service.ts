import { CurrentUserFormInputsData as currentUserForm }
	from '@runtime-state-data/static-classes/current-user-form-inputs.data';
import { HasError } from '@interfaces/has-error.interface';
import { Injectable } from '@angular/core';
import { MongoDBRealmFunctionService } from '@db/mongo-db-realm-function.service';
import { SessionIDInBrowserStorageService }
	from '@browser-storage/session-id-in-browser-storage.service';
import { UserRecord } from '@interfaces/user-record.interface';


@Injectable({providedIn: 'root'})
export class UserAccountService {

	constructor(
		private __realmFn: MongoDBRealmFunctionService,
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
	) {}


	async exists(): Promise<{ success: boolean }> {
		return await this.__realmFn.call('pub_userExists', {email: currentUserForm.email});
	}


	async get(): Promise<UserRecord | HasError> {
		return await this.__realmFn.call('pub_getUser',
			{sessionID: this.__sessionIDInBrowser.get()}
		);
	}

}
