import { CurrentUserService } from '../current-user.service';
import { Injectable } from '@angular/core';
import { SessionIDLocalStorageService } from '../../authentication/session-id-local-storage.service';
import { UserRestAPIService } from '../user-rest-api.service';
import { ReturnObjectFromSubscriptionService } from '../../return-object-from-subscription.service';


@Injectable({
	providedIn: 'root'
})
export class UserDeletorService extends ReturnObjectFromSubscriptionService {

	constructor(
		private __currentUser: CurrentUserService,
		private __userRestApi: UserRestAPIService,
		private __sessionIDLocalStorage: SessionIDLocalStorageService,
	) {
		super();
	}


	async delete(): Promise<any> {
		return await this._getObjectFromSubscriptionTo(
			this.__userRestApi.delete({
				email: this.__currentUser.email,
				password: this.__currentUser.password,
				sessionID: this.__sessionIDLocalStorage.get()
			})
		);
	}


}
