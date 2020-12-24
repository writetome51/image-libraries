import { CurrentUserData as currentUser }
	from '@runtime-state-data/static-classes/current-user.data';
import { Injectable } from '@angular/core';
import { DBUser } from '@interfaces/db-user';
import { MongoDBRealmService } from '@services/mongo-db-realm.service';


@Injectable({providedIn: 'root'})
export class UserCreatorService {

	constructor(private __realm: MongoDBRealmService) {
	}


	async create(): Promise<DBUser | { error: { message: string } }> {
		return await this.__realm.callFn(
			'pub_createAndReturnUser',
			// We don't want to pass entire `currentUser`, but only these 3 properties.
			{
				email: currentUser.email,
				password: currentUser.password,
				securityQuestion: currentUser.securityQuestion
			}
		);
	}

}
