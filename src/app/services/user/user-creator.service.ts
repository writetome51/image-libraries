import { CurrentUserData as currentUser }
	from '../../../data-structures/runtime-state-data/static-classes/current-user.data';
import { Injectable } from '@angular/core';
import { UserRestAPIService } from './user-rest-api.service';
import { getSubscriptionData } from '@writetome51/get-subscription-data';


@Injectable({providedIn: 'root'})

export class UserCreatorService {


	constructor(private __userRestApi: UserRestAPIService) {
	}


	async create(): Promise<string> // JSON containing:  DBUser | {error: {message: string}}
	{
		return await getSubscriptionData(
			this.__userRestApi.create({
				email: currentUser.email,
				password: currentUser.password,
				securityQuestion: currentUser.securityQuestion
			})
		);
	}


}
