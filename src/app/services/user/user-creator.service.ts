import { CurrentUserService as currentUser } from './current-user.service';
import { Injectable } from '@angular/core';
import { UserRestAPIService } from './user-rest-api.service';
import { ReturnObjectFromSubscriptionService } from '../return-object-from-subscription.service';


@Injectable({
	providedIn: 'root'
})
export class UserCreatorService extends ReturnObjectFromSubscriptionService {


	constructor(private __userRestApi: UserRestAPIService) {
		super();
	}


	async create(): Promise<any> {
		return await this._getObjectFromSubscriptionTo(
			this.__userRestApi.create(
				{
					email: currentUser.email,
					password: currentUser.password,
					securityQuestion: currentUser.securityQuestion
				}
			)
		);
	}


}
