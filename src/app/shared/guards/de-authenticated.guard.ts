import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { RedirectToLoggedInHomeService } from '@services/redirect-to-logged-in-home.service';
import { SessionIDAppearsValidService } from '@services/session-id-appears-valid.service';


@Injectable({providedIn: 'root'})
export class DeAuthenticatedGuard implements CanActivate {

	constructor(
		private __sessionIDAppearsValid: SessionIDAppearsValidService,
		private __redirectToLoggedInHome: RedirectToLoggedInHomeService
	) {}


	// Returns true if logged out.

	canActivate(): boolean {
		const assumedLoggedIn = this.__sessionIDAppearsValid.go();
		if (assumedLoggedIn) {
			this.__redirectToLoggedInHome.go();
			return false;
		}
		else return true;
	}

}
