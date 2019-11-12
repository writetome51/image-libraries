import { CurrentUserService as currentUser } from './current-user.service';
import { Injectable } from '@angular/core';
import { LocalSessionIDService } from '../authentication/local-session-id.service';
import { UserRestAPIService } from './user-rest-api.service';
import { GetObjectFromSubscriptionService as getObjectFromSubscription }
	from '../get-object-from-subscription.service';


@Injectable({
	providedIn: 'root'
})
export class UserStorageService {


	constructor(
		private __userRestApi: UserRestAPIService,
		private __localSessionID: LocalSessionIDService
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
					email: currentUser.email,
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
