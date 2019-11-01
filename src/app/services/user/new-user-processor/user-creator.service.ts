import { CurrentUserService } from '../current-user.service';
import { getSubscriptionData } from '@writetome51/get-subscription-data';
import { Injectable } from '@angular/core';
import { UserRestAPIService } from '../user-rest-api.service';


@Injectable({
	providedIn: 'root'
})
export class UserCreatorService {


	constructor(
		private __userRestApi: UserRestAPIService,
		private __currentUser: CurrentUserService
	) {
	}


	async create(): Promise<any> {
		return await getSubscriptionData(
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
