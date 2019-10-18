import { CurrentUserService } from '../../current-user.service';
import { Injectable } from '@angular/core';
import { SubscriptionDataGetterService } from '../../../subscription-data-getter.service';
import { UserRestAPIService } from '../../user-rest-api.service';
import { SavedNewUserResultInterpreterService } from './saved-new-user-result-interpreter.service';


@Injectable({
	providedIn: 'root'
})
export class UserCreatorService extends SubscriptionDataGetterService {


	constructor(
		private __userRestApi: UserRestAPIService,
		private __currentUser: CurrentUserService,
		private __savedNewUserResultInterpreter: SavedNewUserResultInterpreterService
	) {
		super();
	}


	async create(): Promise<void> {
		let result = await this._getSubscriptionData(
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
