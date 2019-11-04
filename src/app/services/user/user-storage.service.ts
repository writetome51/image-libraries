import { CurrentUserService } from './current-user.service';
import { Injectable } from '@angular/core';
import { LocalSessionIDService } from '../authentication/local-session-id.service';
import { UserRestAPIService } from './user-rest-api.service';
import { ReturnObjectFromSubscriptionService } from '../return-object-from-subscription.service';


@Injectable({
	providedIn: 'root'
})
export class UserStorageService extends ReturnObjectFromSubscriptionService {


	constructor(
		private __userRestApi: UserRestAPIService,
		private __currentUser: CurrentUserService,
		private __sessionIDLocalStorage: LocalSessionIDService
	) {
		super();
	}


	async exists(): Promise<any> {
		return await this._getObjectFromSubscriptionTo(
			this.__userRestApi.exists({email: this.__currentUser.email})
		);
	}


	async get(): Promise<any> {
		return await this._getObjectFromSubscriptionTo(
			this.__userRestApi.get({sessionID: this.__sessionIDLocalStorage.get()})
		);
	}


	async updatePassword(): Promise<any> {
		return await this._getObjectFromSubscriptionTo(
			this.__userRestApi.updatePassword(
				{
					email: this.__currentUser.email,
					password: this.__currentUser.password,
					newPassword: this.__currentUser.newPassword,
					sessionID: this.__sessionIDLocalStorage.get()
				}
			)
		);
	}


	async updateEmail(): Promise<any> {
		return await this._getObjectFromSubscriptionTo(
			this.__userRestApi.updateEmail(
				{
					email: this.__currentUser.email,
					password: this.__currentUser.password,
					newEmail: this.__currentUser.newEmail,
					sessionID: this.__sessionIDLocalStorage.get()
				}
			)
		);
	}


}
