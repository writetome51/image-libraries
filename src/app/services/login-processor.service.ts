import { AuthenticationResultService } from './authentication-result.service';
import { AuthenticationRestAPIService } from './authentication-rest-api.service';
import { CurrentUserService } from './current-user.service';
import { DBUser } from '../../interfaces/db-user';
import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class LoginProcessorService {

	// So the session ID is used to find the user document, and if loggedIn = true,
	// the user document is returned to the user. But if loggedIn = false, or
	// the most recent login was too many days ago, the user is forced to log in again.
	// If the sessionID is not found in localStorage, it's assumed the user is logged out.


	constructor(
		private __authenticationRestApi: AuthenticationRestAPIService,
		private __authenticationResult: AuthenticationResultService,
		private __currentUser: CurrentUserService
	) {
	}


	process(): void {
		let subscription = this.__authenticationRestApi.login(
			{email: this.__currentUser.email, password: this.__currentUser.password}
		).subscribe((data: DBUser) => {

			this.__authenticationResult.interpretLogin(data);
			subscription.unsubscribe();
		});

	}


}
