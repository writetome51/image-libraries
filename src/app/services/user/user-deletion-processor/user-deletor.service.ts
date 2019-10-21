import { CurrentUserService } from '../current-user.service';
import { getSubscriptionData } from '@writetome51/get-subscription-data';
import { Injectable } from '@angular/core';
import { SessionIDLocalStorageService } from '../../authentication/session-id-local-storage.service';
import { UserRestAPIService } from '../user-rest-api.service';


@Injectable({
	providedIn: 'root'
})
export class UserDeletorService {

	constructor(
		private __currentUser: CurrentUserService,
		private __userRestApi: UserRestAPIService,
		private __sessionIDLocalStorage: SessionIDLocalStorageService,
	) {
	}


	async delete(): Promise<any> {
		return await getSubscriptionData(
			this.__userRestApi.delete({
				email: this.__currentUser.email,
				password: this.__currentUser.password,
				sessionID: this.__sessionIDLocalStorage.get()
			})
		);
	}


}
