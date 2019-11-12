import { CurrentUserService as currentUser } from './current-user.service';
import { Injectable } from '@angular/core';
import { LocalSessionIDService } from '../authentication/local-session-id.service';
import { UserRestAPIService } from './user-rest-api.service';
import { GetObjectFromSubscriptionService as getObjectFromSubscription}
	from '../get-object-from-subscription.service';


@Injectable({
	providedIn: 'root'
})
export class UserDeleterService {

	constructor(
		private __userRestApi: UserRestAPIService,
		private __localSessionID: LocalSessionIDService,
	) {
	}


	async delete(): Promise<any> {
		return await getObjectFromSubscription.go(
			this.__userRestApi.delete({
				email: currentUser.email,
				password: currentUser.password,
				sessionID: this.__localSessionID.get()
			})
		);
	}


}
