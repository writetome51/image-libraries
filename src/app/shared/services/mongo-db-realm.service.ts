import { Injectable } from '@angular/core';
import * as Realm from 'realm-web';
import { pswd, email } from '@app/.special/.realm-eml-pswrd';


@Injectable({providedIn: 'root'})
export class MongoDBRealmService {

	private __app = new Realm.App({id: 'serverless-functions-rhfqi'});
	private __user: Realm.User;


	constructor() {
		if (!(this.__user)) {
			this.__app.logIn(
				Realm.Credentials.emailPassword(email, pswd)
			).then((user: Realm.User) => this.__user = user);
		}
	}


	async callFn(name, args = []) {
		return await this.__user.callFunction(name, ...args);
	}

}
