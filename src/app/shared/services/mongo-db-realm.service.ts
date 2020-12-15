import { Injectable } from '@angular/core';
import * as Realm from 'realm-web';


@Injectable({providedIn: 'root'})
export class MongoDBRealmService {

	app = new Realm.App({id: 'serverless-functions-rhfqi'});
	user: Realm.User;


	constructor() {
		this.app.logIn(
			Realm.Credentials.emailPassword('writetome51', '')
		).then((user: Realm.User) => this.user = user);
	}


}
