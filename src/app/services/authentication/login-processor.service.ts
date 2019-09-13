import { AuthenticationResultService } from './authentication-result.service';
import { AuthenticationRestAPIService } from './authentication-rest-api.service';
import { CurrentUserService } from '../user/current-user.service';
import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class LoginProcessorService {


	constructor(
		private __authenticationRestApi: AuthenticationRestAPIService,
		private __authenticationResult: AuthenticationResultService,
		private __currentUser: CurrentUserService
	) {
	}


	process(): void {
		let subscription = this.__authenticationRestApi.login(
			{email: this.__currentUser.email, password: this.__currentUser.password}
		).subscribe((data) => {

			this.__authenticationResult.interpretLogin(data);
			subscription.unsubscribe();
		});

	}


}
