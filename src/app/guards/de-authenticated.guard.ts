import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LocalSessionIDService } from '@services/local-storage-data/local-session-id.service';
import { RedirectToLoggedInHomeService } from '@services/redirect-to-logged-in-home.service';


@Injectable({providedIn: 'root'})

export class DeAuthenticatedGuard implements CanActivate {

	constructor(
		private __localSessionID: LocalSessionIDService,
		private __redirectToLoggedInHome: RedirectToLoggedInHomeService
	) {
	}


	// Returns true if logged out.

	canActivate(): boolean {
		if (this.__localSessionID.get()) {
			this.__redirectToLoggedInHome.go();
			return false;
		}
		else return true;
	}

}
