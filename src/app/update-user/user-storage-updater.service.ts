import { CurrentUserData as currentUser }
	from '../../data-structures/runtime-state-data/static-classes/current-user.data';
import { Injectable } from '@angular/core';
import { LocalSessionIDService } from '../shared/services/local-data/local-session-id.service';
import { UserRestAPIService } from '../shared/services/user/user-rest-api.service';
import { LocalEmailService } from '../shared/services/local-data/local-email.service';
import { GetObjectFromSubscriptionService as getObjectFromSubscription}
	from '../shared/services/get-object-from-subscription.service';
import { DBUser } from '../../interfaces/db-user';


@Injectable({providedIn: 'root'})

export class UserStorageUpdaterService {


	constructor(
		private __userRestApi: UserRestAPIService,
		private __localSessionID: LocalSessionIDService,
		private __localEmail: LocalEmailService
	) {
	}


	async updatePassword(): Promise<DBUser | { error: { message: string } }> {
		return await getObjectFromSubscription.go(
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
		return await getObjectFromSubscription.go(
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
