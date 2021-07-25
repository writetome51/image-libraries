import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { SessionIDAppearsValidService } from '@services/session-id-appears-valid.service';


@Injectable({providedIn: 'root'})
export class AuthenticatedGuard implements CanActivate {

	constructor(
		private __sessionIDAppearsValid: SessionIDAppearsValidService,
		private __router: Router
	) {}


	canActivate(): boolean {
		return this.__ifAssumedLoggedIn_returnTrue_else_redirectToLoginAndReturnFalse();
	}


	private __ifAssumedLoggedIn_returnTrue_else_redirectToLoginAndReturnFalse(): boolean {
		const assumedLoggedIn = this.__sessionIDAppearsValid.go();
		if (assumedLoggedIn) return true;

		this.__router.navigate(['/']);
		return false;
	}

}
