import { Injectable } from '@angular/core';
import * as Realm from 'realm-web';
import { pswd, usr } from '@app/.special/.realm-usr-pswrd';


@Injectable({providedIn: 'root'})
export class MongoDBRealmService {

	private __app = new Realm.App({id: 'serverless-functions-rhfqi'});
	private __user: Realm.User;


	constructor() {
		if (!(this.__user)) {
			this.__app.logIn(
				Realm.Credentials.emailPassword(usr, pswd)
			).then((user: Realm.User) => this.__user = user);
		}
	}


}
