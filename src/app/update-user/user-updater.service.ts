import { CurrentUserData as currentUser } from '@runtime-state-data/static-classes/current-user.data';
import { DBUser } from '@interfaces/db-user';
import { GetObjectFromSubscriptionService as getObjectFromSubscription }
	from '@services/get-object-from-subscription.service';
import { Injectable } from '@angular/core';
import { LocalSessionIDService } from '@services/local-storage-item/local-session-id.service';
import { LocalEmailService } from '@services/local-storage-item/local-email.service';
import { UserRestAPIService } from '@services/user/user-rest-api.service';


@Injectable({providedIn: 'root'})

export class UserUpdaterService {


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
