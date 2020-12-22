import { AppUser } from '@interfaces/app-user';
import { DBUser } from '@interfaces/db-user';
import { Injectable } from '@angular/core';
import { LocalSessionIDService }
	from '@services/item-in-browser-storage/item-in-local-storage/local-session-id.service';
import { MongoDBRealmService } from '@services/mongo-db-realm.service';


@Injectable({providedIn: 'root'})
export class UserStorageService {

	constructor(
		private __realm: MongoDBRealmService,
		private __localSessionID: LocalSessionIDService,
	) {
	}


	async exists(email: string): Promise<{ success: boolean }> {
		return await this.__realm.callFn('userExists', {email});
	}


	async get(): Promise<DBUser | { error: { message: string } }> {
		return await this.__realm.callFn('getUser', {sessionID: this.__localSessionID.get()});
	}


	async delete(user: AppUser): Promise<{ success: true } | { error: { message: string } }> {
		return await this.__realm.callFn('deleteUser', {
			email: user.email,
			password: user.password,
			sessionID: this.__localSessionID.get()
		});
	}

}
