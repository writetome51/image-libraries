import { AuthenticationRestAPIService } from './authentication-rest-api.service';
import { CurrentUserService } from '../user/current-user.service';
import { Injectable } from '@angular/core';
import { LoginResultInterpreterService } from './login-result-interpreter.service';


@Injectable({
	providedIn: 'root'
})
export class LoginProcessorService {


	constructor(
		private __authenticationRestApi: AuthenticationRestAPIService,
		private __loginResultInterpreter: LoginResultInterpreterService,
		private __currentUser: CurrentUserService
	) {
	}


	async process() {
		let subscription = this.__authenticationRestApi.login(
			{email: this.__currentUser.email, password: this.__currentUser.password}
		).subscribe((result) => {

			this.__loginResultInterpreter.interpret(result);
			subscription.unsubscribe();
		});

	}


}
