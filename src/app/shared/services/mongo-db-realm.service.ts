import { email, pswd } from '@app/.special/.realm-eml-pswrd';
import { Injectable } from '@angular/core';
import * as Realm from 'realm-web';


// Connects with cloud service MongoDB Realm and allows us to call serverless functions we've
// deployed on it.  All public functions we can call begin with prefix 'pub_' .

@Injectable({providedIn: 'root'})
export class MongoDBRealmService {

	private readonly __realmAppID = 'serverless-functions-rhfqi';
	private __app = new Realm.App({id: this.__realmAppID});
	private __user: Realm.User;


	async callFn(name: string, params: object): Promise<any> {
		if (!(this.__user)) {
			await this.__set__user();
		}
		return await this.__user.callFunction(name, params);
	}


	private async __set__user() {
		this.__user = await this.__app.logIn(
			Realm.Credentials.emailPassword(email, pswd)
		);
	}

}
