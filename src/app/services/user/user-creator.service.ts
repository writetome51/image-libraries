import { CurrentUserData as currentUser } from '../../runtime-state-data/current-user.data';
import { Injectable } from '@angular/core';
import { UserRestAPIService } from './user-rest-api.service';
import { GetObjectFromSubscriptionService as getObjectFromSubscription }
	from '../get-object-from-subscription.service';


@Injectable({providedIn: 'root'})

export class UserCreatorService {


	constructor(private __userRestApi: UserRestAPIService) {
	}


	async create(): Promise<any> {
		return await getObjectFromSubscription.go(
			this.__userRestApi.create({
				email: currentUser.email,
				password: currentUser.password,
				securityQuestion: currentUser.securityQuestion
			})
		);
	}


}
