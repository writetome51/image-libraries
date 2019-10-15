import { Injectable } from '@angular/core';
import { SubscriptionDataGetterService } from '../subscription-data-getter.service';
import { UserRestAPIService } from './user-rest-api.service';
import { CurrentUserService } from './current-user.service';
import { SessionIDLocalStorageService } from '../authentication/session-id-local-storage.service';


@Injectable({
	providedIn: 'root'
})
export class UserDeletorService extends SubscriptionDataGetterService {

	constructor(
		private __userRestApi: UserRestAPIService,
		private __currentUser: CurrentUserService,
		private __sessionIDLocalStorage: SessionIDLocalStorageService
	) {
		super();
	}


	async delete(): Promise<any> {
		return await this._getSubscriptionData(
			this.__userRestApi.delete({
				email: this.__currentUser.email,
				password: this.__currentUser.password,
				sessionID: this.__sessionIDLocalStorage.get()
			})
		);
	}


}
