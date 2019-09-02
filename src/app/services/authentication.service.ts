import { ActiveUserService } from './active-user.service';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { RestAPIService } from './rest-api.service';


@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {


	constructor(
		private __restApi: RestAPIService,
		private __activeUser: ActiveUserService,
		private __localStorage: LocalStorageService
	) {
	}


	get loggedIn(): boolean {
		return this.__localStorage.loggedIn;
	}


	async login() {
		let subscription = this.__restApi.userLogin(
			{email: this.__activeUser.email, password: this.__activeUser.password}
		).subscribe((data) => {

			if (typeof data === 'string') data = JSON.parse(data);
			if (data.email) this.__localStorage.login();
			subscription.unsubscribe();
		});

	}


	logout(): void {
		this.__localStorage.logout();

	}


}
