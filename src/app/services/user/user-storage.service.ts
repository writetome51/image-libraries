import { CurrentUserService } from './current-user.service';
import { getSubscriptionData } from '@writetome51/get-subscription-data';
import { Injectable } from '@angular/core';
import { SessionIDLocalStorageService } from '../authentication/session-id-local-storage.service';
import { UserRestAPIService } from './user-rest-api.service';


@Injectable({
	providedIn: 'root'
})
export class UserStorageService {


	constructor(
		private __userRestApi: UserRestAPIService,
		private __currentUser: CurrentUserService,
		private __sessionIDLocalStorage: SessionIDLocalStorageService
	) {
	}


	async exists(): Promise<any> {
		return await getSubscriptionData(
			this.__userRestApi.exists({email: this.__currentUser.email})
		);
	}


	async get(): Promise<any> {
		return await getSubscriptionData(
			this.__userRestApi.get({sessionID: this.__sessionIDLocalStorage.get()})
		);
	}


	async updatePassword(): Promise<any> {
		return await getSubscriptionData(
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
		return await getSubscriptionData(
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
