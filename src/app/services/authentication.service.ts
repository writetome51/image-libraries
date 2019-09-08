import { AuthenticationRestAPIService } from './authentication-rest-api.service';
import { CurrentUserService } from './current-user.service';
import { DBUser } from '../../interfaces/db-user';
import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { SessionIDLocalStorageService } from './session-id-local-storage.service';



@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {


	constructor(
		private __authenticationRestApi: AuthenticationRestAPIService,
		private __currentUser: CurrentUserService,
		private __sessionIDLocalStorage: SessionIDLocalStorageService,
	) {
	}


	get loggedIn(): boolean {
		return hasValue(this.__sessionIDLocalStorage.get());
	}


	login(): void {
		let subscription = this.__authenticationRestApi.login(
			{email: this.__currentUser.email, password: this.__currentUser.password}
		).subscribe((data: DBUser) => {


			subscription.unsubscribe();
		});

	}


	logout(): void {
		let subscription = this.__authenticationRestApi.logout(
			{sessionID: this.__sessionIDLocalStorage.get()}
		).subscribe((data) => {


			subscription.unsubscribe();
		});

	}


}
