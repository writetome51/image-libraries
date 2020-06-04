import { Injectable } from '@angular/core';
import { LocalSessionIDService } from '../local-data/local-session-id.service';
import { UserRestAPIService } from './user-rest-api.service';
import { GetObjectFromSubscriptionService } from '../get-object-from-subscription.service';
import { DBUser } from '../../../interfaces/db-user';
import { AppUser } from '../../../interfaces/app-user';


@Injectable({providedIn: 'root'})

export class UserStorageService extends GetObjectFromSubscriptionService {


	constructor(
		private __userRestApi: UserRestAPIService,
		private __localSessionID: LocalSessionIDService
	) {
		super();
	}


	async exists(user: { email: string }): Promise<{ success: boolean }> {
		return await this.go(this.__userRestApi.exists({email: user.email}));
	}


	async get(): Promise<DBUser | { error: { message: string } }> {
		return await this.go(
			this.__userRestApi.get({sessionID: this.__localSessionID.get()})
		);
	}


	async create(user: AppUser): Promise<DBUser | { error: { message: string } }> {
		return await this.go(
			this.__userRestApi.create({
				email: user.email,
				password: user.password,
				securityQuestion: user.securityQuestion
			})
		);
	}


	async delete(user: AppUser): Promise<{ success: true } | { error: { message: string } }> {
		return await this.go(
			this.__userRestApi.delete({
				email: user.email,
				password: user.password,
				sessionID: this.__localSessionID.get()
			})
		);
	}


}
