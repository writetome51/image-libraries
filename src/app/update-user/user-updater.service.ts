import { CurrentUserData as currentUser }
	from '@runtime-state-data/static-classes/current-user.data';
import { DBUser } from '@interfaces/app-user/db-user.interface';
import { EmailInBrowserStorageService }
	from '@item-in-browser-storage/email-in-browser-storage.service';
import { Injectable } from '@angular/core';
import { MongoDBRealmFunctionService } from '@services/mongo-db-realm-function.service';
import { SessionIDInBrowserStorageService }
	from '@item-in-browser-storage/session-id-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class UserUpdaterService {

	constructor(
		private __realmFn: MongoDBRealmFunctionService,
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
		private __emailInBrowser: EmailInBrowserStorageService
	) {
	}


	async updatePassword(): Promise<DBUser | { error: { message: string } }> {
		return await this.__realmFn.call('pub_updatePasswordAndReturnUser', {
			email: this.__emailInBrowser.get(),
			password: currentUser.password,
			newPassword: currentUser.newPassword,
			sessionID: this.__sessionIDInBrowser.get()
		});
	}


	async updateEmail(): Promise<DBUser | { error: { message: string } }> {
		return await this.__realmFn.call('pub_updateEmailAndReturnUser', {
			email: currentUser.email,
			password: currentUser.password,
			newEmail: currentUser.newEmail,
			sessionID: this.__sessionIDInBrowser.get()
		});
	}

}
