import { email, pswd } from '@app/.special/.realm-eml-pswrd';
import { Injectable } from '@angular/core';
import * as Realm from 'realm-web';


// Connects with cloud service MongoDB Realm and allows us to call serverless functions we've
// deployed on it.

@Injectable({providedIn: 'root'})
export class MongoDBRealmService {

	private ____user; // super-private
	private __realmAppID =  'serverless-functions-rhfqi';

	private get __user(): Realm.User {
		if (!(this.____user)) {
			let app = new Realm.App({id: this.__realmAppID});

			app.logIn(
				Realm.Credentials.emailPassword(email, pswd)
			).then((user: Realm.User) => this.____user = user);
		}
		return this.____user;
	}


	async callFn(name: string, params: object): Promise<any> {
		return await this.__user.callFunction(name, params);
	}

}
