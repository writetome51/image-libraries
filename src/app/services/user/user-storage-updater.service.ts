import { CurrentUserData as currentUser }
	from '../../../data-structures/runtime-state-data/static-classes/current-user.data';
import { Injectable } from '@angular/core';
import { LocalSessionIDService } from '../local-data/local-session-id.service';
import { UserRestAPIService } from './user-rest-api.service';
import { LocalEmailService } from '../local-data/local-email.service';
import { GetObjectFromSubscriptionService } from '../get-object-from-subscription.service';
import { DBUser } from '../../../interfaces/db-user';


@Injectable({providedIn: 'root'})

export class UserStorageUpdaterService extends GetObjectFromSubscriptionService {


	constructor(
		private __userRestApi: UserRestAPIService,
		private __localSessionID: LocalSessionIDService,
		private __localEmail: LocalEmailService
	) {
		super();
	}


	async updatePassword(): Promise<DBUser | { error: { message: string } }> {
		return await this.go(
			this.__userRestApi.updatePassword(
				{
					email: this.__localEmail.get(),
					password: currentUser.password,
					newPassword: currentUser.newPassword,
					sessionID: this.__localSessionID.get()
				}
			)
		);
	}


	async updateEmail(): Promise<DBUser | { error: { message: string } }> {
		return await this.go(
			this.__userRestApi.updateEmail(
				{
					email: currentUser.email,
					password: currentUser.password,
					newEmail: currentUser.newEmail,
					sessionID: this.__localSessionID.get()
				}
			)
		);
	}


}
