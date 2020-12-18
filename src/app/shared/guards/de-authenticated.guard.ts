import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { LocalSessionIDService }
	from '@services/item-in-browser-storage/item-in-local-storage/local-session-id.service';
import { RedirectToLoggedInHomeService } from '@services/redirect-to-logged-in-home.service';
import { hasValue } from '@writetome51/has-value-no-value';


@Injectable({providedIn: 'root'})
export class DeAuthenticatedGuard implements CanActivate {

	constructor(
		private __localSessionID: LocalSessionIDService,
		private __redirectToLoggedInHome: RedirectToLoggedInHomeService
	) {
	}


	// Returns true if logged out.

	canActivate(): boolean {
		if (hasValue(this.__localSessionID.get())) {
			this.__redirectToLoggedInHome.go();
			return false;
		}
		else return true;
	}

}
