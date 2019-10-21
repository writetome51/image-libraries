import { CurrentUserService } from '../../current-user.service';
import { getSubscriptionData } from '@writetome51/get-subscription-data';
import { Injectable } from '@angular/core';
import { UserRestAPIService } from '../../user-rest-api.service';
import { SavedNewUserResultInterpreterService } from './saved-new-user-result-interpreter.service';


@Injectable({
	providedIn: 'root'
})
export class UserCreatorService {


	constructor(
		private __userRestApi: UserRestAPIService,
		private __currentUser: CurrentUserService,
		private __savedNewUserResultInterpreter: SavedNewUserResultInterpreterService
	) {
	}


	async create(): Promise<void> {
		let result = await getSubscriptionData(
			this.__userRestApi.create(
				{
					email: this.__currentUser.email,
					password: this.__currentUser.password,
					securityQuestion: this.__currentUser.securityQuestion
				}
			)
		);

		this.__savedNewUserResultInterpreter.interpret(result);
	}


}
