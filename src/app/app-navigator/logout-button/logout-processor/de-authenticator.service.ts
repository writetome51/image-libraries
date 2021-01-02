import { Injectable } from '@angular/core';
import { LocalSessionIDService }
	from '@services/item-in-browser-storage/item-in-local-storage/local-session-id.service';
import { MongoDBRealmService } from '@services/mongo-db-realm.service';


@Injectable({providedIn: 'root'})
export class DeAuthenticatorService {

	constructor(
		private __localSessionID: LocalSessionIDService,
		private __realm: MongoDBRealmService
	) {
	}


	async deAuthenticate(): Promise<{ success: true } | { error: { message: string } }> {
		return await this.__realm.callFn('pub_logoutUser',
			{sessionID: this.__localSessionID.get()}
		);
	}

}
