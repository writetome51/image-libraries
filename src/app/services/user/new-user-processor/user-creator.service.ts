import { CurrentUserService } from '../current-user.service';
import { Injectable } from '@angular/core';
import { UserRestAPIService } from '../user-rest-api.service';
import { ReturnObjectFromSubscriptionService } from '../../return-object-from-subscription.service';


@Injectable({
	providedIn: 'root'
})
export class UserCreatorService extends ReturnObjectFromSubscriptionService {


	constructor(
		private __userRestApi: UserRestAPIService,
		private __currentUser: CurrentUserService
	) {
		super();
	}


	async create(): Promise<any> {
		return await this._getObjectFromSubscriptionTo(
			this.__userRestApi.create(
				{
					email: this.__currentUser.email,
					password: this.__currentUser.password,
					securityQuestion: this.__currentUser.securityQuestion
				}
			)
		);
	}


}
