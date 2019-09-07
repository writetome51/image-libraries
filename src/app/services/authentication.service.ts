import { CurrentUserService } from './current-user.service';
import { AuthenticationRestAPIService } from './authentication-rest-api.service';
import { Injectable } from '@angular/core';
import { SessionIDLocalStorageService } from './session-id-local-storage.service';


@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {


	constructor(
		private __authenticationRestApi: AuthenticationRestAPIService,
		private __activeUser: CurrentUserService,
		private __localStorage: SessionIDLocalStorageService
	) {
	}


	get loggedIn(): boolean {
		return this.__localStorage.loggedIn;
	}


	async login() {
		let subscription = this.__authenticationRestApi.login(
			{email: this.__activeUser.email, password: this.__activeUser.password}
		).subscribe((data) => {

			if (typeof data === 'string') {
				data = JSON.parse(data);
			}
			if (data.email) {
				this.__localStorage.login();
			}
			subscription.unsubscribe();
		});

	}


	logout(): void {
		this.__localStorage.logout();
		this.__authenticationRestApi.logout(
			{email: this.__activeUser.email, password: this.__activeUser.password}
		);
	}


}
