import { CurrentUserData as currentUser }
	from '../../../data-structures/runtime-state-data/static-classes/current-user.data';
import { Injectable } from '@angular/core';
import { LocalSessionIDService } from '../local-data/local-session-id.service';
import { UserRestAPIService } from './user-rest-api.service';
import { getSubscriptionData } from '@writetome51/get-subscription-data';


@Injectable({providedIn: 'root'})

export class UserStorageService {


	constructor(
		private __userRestApi: UserRestAPIService,
		private __localSessionID: LocalSessionIDService,
	) {
	}


	async exists(): Promise<any> {
		return await getSubscriptionData(
			this.__userRestApi.exists({email: currentUser.email})
		);
	}


	async get(): Promise<any> {
		return await getSubscriptionData(
			this.__userRestApi.get({sessionID: this.__localSessionID.get()})
		);
	}


}
