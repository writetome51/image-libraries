import { CurrentUserData as currentUser }
	from '@runtime-state-data/static-classes/current-user.data';
import { DBUser } from '@interfaces/db-user';
import { Injectable } from '@angular/core';
import { LocalEmailService }
	from '@services/item-in-browser-storage/item-in-local-storage/local-email.service';
import { LocalSessionIDService }
	from '@services/item-in-browser-storage/item-in-local-storage/local-session-id.service';
import { MongoDBRealmService } from '@services/mongo-db-realm.service';


@Injectable({providedIn: 'root'})
export class UserUpdaterService {

	constructor(
		private __realm: MongoDBRealmService,
		private __localSessionID: LocalSessionIDService,
		private __localEmail: LocalEmailService
	) {
	}


	async updatePassword(): Promise<DBUser | { error: { message: string } }> {
		return await this.__realm.callFn('pub_updatePasswordAndReturnUser', {
			email: this.__localEmail.get(),
			password: currentUser.password,
			newPassword: currentUser.newPassword,
			sessionID: this.__localSessionID.get()
		});
	}


	async updateEmail(): Promise<DBUser | { error: { message: string } }> {
		return await this.__realm.callFn('pub_updateEmailAndReturnUser', {
			email: currentUser.email,
			password: currentUser.password,
			newEmail: currentUser.newEmail,
			sessionID: this.__localSessionID.get()
		});
	}

}
