import { Injectable } from '@angular/core';
import * as Realm from 'realm-web';
import { pswd, email } from '@app/.special/.realm-eml-pswrd';


// Connects with cloud service MongoDB Realm and allows us to call serverless functions we've
// deployed on it.

@Injectable({providedIn: 'root'})
export class MongoDBRealmService {

	private __user: Realm.User;


	constructor() {
		let app = new Realm.App({id: 'serverless-functions-rhfqi'});

		app.logIn(
			Realm.Credentials.emailPassword(email, pswd)
		).then((user: Realm.User) => this.__user = user);
	}


	async callFn(name: string, params: object) {
		return await this.__user.callFunction(name, params);
	}

}
