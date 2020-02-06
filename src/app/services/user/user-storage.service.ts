import { CurrentUserData as currentUser } from '../../data/runtime-state-data/current-user.data';
import { Injectable } from '@angular/core';
import { LocalSessionIDService } from '../local-data/local-session-id.service';
import { UserRestAPIService } from './user-rest-api.service';
import { GetObjectFromSubscriptionService as getObjectFromSubscription }
	from '../get-object-from-subscription.service';
import { LocalEmailService } from '../local-data/local-email.service';


@Injectable({
	providedIn: 'root'
})
export class UserStorageService {


	constructor(
		private __userRestApi: UserRestAPIService,
		private __localSessionID: LocalSessionIDService,
		private __localEmail: LocalEmailService
	) {
	}


	async exists(): Promise<any> {
		return await getObjectFromSubscription.go(
			this.__userRestApi.exists({email: currentUser.email})
		);
	}


	async get(): Promise<any> {
		return await getObjectFromSubscription.go(
			this.__userRestApi.get({sessionID: this.__localSessionID.get()})
		);
	}


	async updatePassword(): Promise<any> {
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


	async updateEmail(): Promise<any> {
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
